FROM oven/bun:slim

LABEL maintaner="rubendltv@correo.ugr.es"

WORKDIR /home/bun/app

COPY --chown=bun:bun package.json bun.lockb .

RUN bun install --silent

ENTRYPOINT ["bun", "run", "test"]

