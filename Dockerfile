FROM node:18.9-alpine AS dependencies
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm clean-install

FROM node:18.9-alpine AS build
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# FROM node:18.9-alpine AS run
# WORKDIR /app
# EXPOSE 80
# EXPOSE 443
# CMD npm run
