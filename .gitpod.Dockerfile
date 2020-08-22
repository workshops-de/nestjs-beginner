FROM gitpod/workspace-mysql

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

# RUN brew install libpq postgres
# RUN brew link --force libpq

RUN npm i -g @nestjs/cli
