FROM oven/bun:slim

LABEL version="0.0.5" \
      maintaner="rubendltv@correo.ugr.es"

WORKDIR /app/test

USER bun

COPY --chown=bun:bun package.json bun.lockb .

RUN bun install --silent

ENTRYPOINT ["bun", "run", "test"]

