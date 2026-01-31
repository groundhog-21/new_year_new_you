# 1. Use Node.js 20
FROM node:20-alpine AS base

# 2. Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 3. Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# --- FIX START ---
# Ensure the next binary is executable before running the build
RUN chmod -R +x node_modules/.bin
# --- FIX END ---

RUN npm run build

# 4. Production runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV PORT 8080

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src/content ./src/content

EXPOSE 8080
CMD ["npm", "start"]