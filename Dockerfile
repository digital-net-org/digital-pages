FROM node:23-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm i

ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm run build

FROM nginx:1.28.0-alpine-slim as digital-app
COPY ./.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/

EXPOSE 3045
ENTRYPOINT ["nginx","-g","daemon off;"]
