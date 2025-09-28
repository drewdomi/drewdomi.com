FROM docker.io/node:22-alpine AS builder

WORKDIR /drewdomi

RUN npm install -g pnpm@10

COPY . .

RUN pnpm i --frozen-lockfile --ignore-scripts && \
  pnpm run build

FROM docker.io/caddy:2.9-alpine AS prod

COPY --from=builder /drewdomi/dist /usr/share/caddy
COPY --from=builder /drewdomi/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 443

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]