FROM oven/bun:slim

LABEL version="0.0.5" \
      maintaner="rubendltv@correo.ugr.es"

USER bun

WORKDIR /app/test

COPY --chown=bun:bun bun.lockb package.json .

RUN bun install

ENTRYPOINT ["bun", "run", "test"]

