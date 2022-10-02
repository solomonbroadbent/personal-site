FROM node:18.9-alpine AS dependencies
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm clean-install

FROM node:18.9-alpine AS build
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18.9-alpine AS run
WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

# next picks the port based upon this environment variable
ENV PORT 80 
EXPOSE 80

CMD ["node", "server.js"]
