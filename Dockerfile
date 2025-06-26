FROM nginx:1.20.1 AS base
#RUN apt-get update && apt-get install -y wget
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
EXPOSE 80:80

# Build
#FROM node:16.20.0-alpine AS build
FROM node:alpine3.20 AS build
RUN mkdir -p /app
COPY . .
WORKDIR /app
RUN yarn -i
RUN npm run build

# Deployment
FROM base AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
