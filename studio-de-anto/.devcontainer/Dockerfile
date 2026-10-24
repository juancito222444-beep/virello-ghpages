FROM mcr.microsoft.com/devcontainers/python:1-3.12-bookworm

# The base image includes a Yarn APT source with an obsolete signing key.
# This project uses npm ci; remove that unused source before any APT update.
# Keep signature verification enabled for the Debian packages, including zstd.
RUN rm -f /etc/apt/sources.list.d/yarn.list /etc/apt/sources.list.d/yarn.sources \
    && apt-get update \
    && apt-get install --no-install-recommends -y zstd \
    && rm -rf /var/lib/apt/lists/*
