FROM oven/bun:slim

LABEL version="0.0.5" \
      maintaner="rubendltv@correo.ugr.es"

USER bun

WORKDIR /home/bun

COPY --chown=bun:bun bun.lockb package.json .

RUN bun install

WORKDIR /app/test

ENTRYPOINT ["bun", "run", "test"]

