FROM mcr.microsoft.com/devcontainers/python:1-3.12-bookworm

# npm is used by this project; remove the unused Yarn source with its obsolete key.
RUN rm -f /etc/apt/sources.list.d/yarn.list /etc/apt/sources.list.d/yarn.sources
