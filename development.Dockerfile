FROM node:18.9-alpine AS dependencies
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm clean-install

FROM node:18.9-alpine AS run
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

# next picks the port based upon this environment variable
ENV PORT 80 
EXPOSE 80

CMD ["npm", "run", "dev"]
