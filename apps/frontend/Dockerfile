
FROM node:20-alpine AS builder

WORKDIR /app

COPY ../../package.json ../../package-lock.json ./
RUN npm install

COPY ../../ .
RUN npm run build --workspace=apps/frontend

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/apps/frontend ./
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
