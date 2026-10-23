FROM mcr.microsoft.com/devcontainers/python:1-3.12-bookworm

# Needed only for the explicitly requested, checksum-verified portable Ollama.
RUN apt-get update \
    && apt-get install --no-install-recommends -y zstd \
    && rm -rf /var/lib/apt/lists/*
