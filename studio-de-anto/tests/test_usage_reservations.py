"""Atomic capacity holds are not attempts and cannot be spent by other jobs."""
import asyncio
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from threading import Barrier

import pytest

from backend import store, usage


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    clock={'now':datetime(2026,10,28,12,tzinfo=timezone.utc)}
    monkeypatch.setattr(usage,'_now',lambda:clock['now'])
    usage.save_policy({'daily_requests':7,'max_output_tokens':512,'concise':True})
    return clock


def test_held_slots_protect_the_whole_job_from_unreserved_calls():
    usage.reserve_budget('plan',7)
    assert usage.summary()['attempted']==0
    assert usage.summary()['reserved']==7 and usage.summary()['available']==0
    with usage.use_budget('plan'),usage.tracking('gemini','mock'):pass
    usage.reserve_budget('plan',2)
    status=usage.summary()
    assert status['attempted']==1 and status['reserved']==2
    assert status['remaining']==status['available']==4
    for _ in range(4):
        with usage.tracking('groq','other-chat'):pass
    with pytest.raises(usage.UsageLimitExceeded):
        with usage.tracking('groq','other-chat'):pytest.fail('No capacity remains outside the hold')
    with usage.use_budget('plan'):
        for _ in range(2):
            with usage.tracking('gemini','mock'):pass
    assert usage.summary()['attempted']==7 and usage.summary()['reserved']==0
    usage.release_budget('plan')
    assert not store.rows('SELECT * FROM api_usage_holds')


def test_concurrent_jobs_cannot_overreserve_and_repeated_admission_does_not_duplicate():
    usage.save_policy({'daily_requests':10,'max_output_tokens':512,'concise':True})
    barrier=Barrier(12)
    def admit(index):
        barrier.wait(timeout=10)
        try:usage.reserve_budget('job'+str(index),7)
        except usage.UsageLimitExceeded:return None
        return 'job'+str(index)
    with ThreadPoolExecutor(max_workers=12) as pool:
        admitted=[job for job in pool.map(admit,range(12)) if job]
    assert len(admitted)==1
    usage.reserve_budget(admitted[0],7)
    assert usage.summary()['attempted']==0 and usage.summary()['reserved']==7
    assert usage.summary()['available']==3


def test_concurrent_held_calls_and_other_chats_share_capacity_without_stealing():
    usage.reserve_budget('job',3)
    barrier=Barrier(11)
    def request(index):
        barrier.wait(timeout=10)
        try:
            with usage.use_budget('job' if index<3 else None),usage.tracking('gemini','mock'):pass
        except usage.UsageLimitExceeded:return False
        return True
    with ThreadPoolExecutor(max_workers=11) as pool:
        results=list(pool.map(request,range(11)))
    assert results[:3]==[True]*3 and sum(results[3:])==4
    status=usage.summary()
    assert status['attempted']==7 and status['reserved']==status['available']==0


def test_transfer_and_resize_share_the_callers_transaction():
    usage.reserve_budget('planning',7)
    with pytest.raises(RuntimeError):
        with store.db() as c:
            c.execute('BEGIN IMMEDIATE')
            usage.transfer_budget('planning','run',2,connection=c)
            raise RuntimeError('Simulated state save failure')
    assert store.one('SELECT * FROM api_usage_holds')['id']=='planning'
    assert usage.summary()['reserved']==7
    with store.db() as c:
        c.execute('BEGIN IMMEDIATE')
        usage.transfer_budget('planning','run',2,connection=c)
    assert store.one('SELECT * FROM api_usage_holds')['id']=='run'
    assert usage.summary()['reserved']==2 and usage.summary()['attempted']==0


def test_reducing_policy_never_lets_a_hold_bypass_the_new_limit():
    usage.reserve_budget('job',3)
    with usage.use_budget('job'),usage.tracking('gemini','mock'):pass
    usage.save_policy({'daily_requests':2,'max_output_tokens':512,'concise':True})
    with pytest.raises(usage.UsageLimitExceeded):
        with usage.use_budget('job'),usage.tracking('gemini','mock'):pytest.fail('The reduced limit must apply')
    assert usage.summary()['attempted']==1 and usage.summary()['reserved']==2
    usage.release_budget('job')
    assert usage.summary()['available']==1


def test_rollover_requires_explicit_new_admission(isolated):
    usage.reserve_budget('job',2)
    isolated['now']+=timedelta(days=1)
    assert usage.summary()['reserved']==0 and usage.summary()['available']==7
    with pytest.raises(usage.UsageBudgetExpired):
        with usage.use_budget('job'),usage.tracking('gemini','mock'):pytest.fail('No implicit admission on another day')
    with pytest.raises(usage.UsageBudgetExpired):usage.reserve_budget('job',2)
    assert usage.summary()['attempted']==0
    usage.release_budget('job');usage.reserve_budget('job',2)
    with usage.use_budget('job'),usage.tracking('gemini','mock'):pass
    assert usage.summary()['attempted']==1 and usage.summary()['reserved']==1


@pytest.mark.parametrize('kind',['missing','exhausted'])
def test_invalid_budget_never_falls_back_to_unreserved_capacity(kind):
    if kind=='exhausted':
        usage.reserve_budget('job',1)
        with usage.use_budget('job'),usage.tracking('gemini','mock'):pass
    before=usage.summary()['attempted']
    with pytest.raises(usage.UsageReservationError):
        with usage.use_budget('job'),usage.tracking('gemini','mock'):pytest.fail('Do not charge outside this budget')
    assert usage.summary()['attempted']==before
    assert usage._current_budget.get() is None


def test_failed_and_cancelled_attempts_still_count_while_unused_capacity_is_released():
    usage.reserve_budget('job',3)
    with pytest.raises(RuntimeError):
        with usage.use_budget('job'),usage.tracking('gemini','mock'):raise RuntimeError('Provider failed')
    with pytest.raises(asyncio.CancelledError):
        with usage.use_budget('job'),usage.tracking('gemini','mock'):raise asyncio.CancelledError()
    assert usage.summary()['reserved']==1
    usage.release_budget('job')
    status=usage.summary()
    assert status['failed']==1 and status['cancelled']==1 and status['attempted']==2
    assert status['reserved']==0 and status['available']==5


def test_startup_releases_holds_without_refunding_abandoned_attempts():
    usage.reserve_budget('job',3)
    with usage.use_budget('job'):usage._reserve('gemini','mock')
    assert usage.recover_interrupted()==1
    status=usage.summary()
    assert status['attempted']==1 and status['interrupted']==1
    assert status['reserved']==0 and status['available']==6


@pytest.mark.parametrize('slots',[-1,8,True,1.5])
def test_invalid_reservation_sizes_do_not_create_holds(slots):
    with pytest.raises(ValueError):usage.reserve_budget('job',slots)
    assert not store.rows('SELECT * FROM api_usage_holds')
