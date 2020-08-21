FROM gitpod/workspace-postgres

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

# RUN brew install libpq
# RUN brew link --force libpq ail

RUN npm i -g @nestjs/cli

RUN echo '\x \\ CREATE DATABASE workshop;' | psql
RUN psql -U gitpod workshop < dump.sql
