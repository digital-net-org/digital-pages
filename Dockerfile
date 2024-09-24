FROM node:22-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm i

ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm run build

FROM nginx:1.27.1-alpine
COPY ./.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/

ENV NODE_ENV="production"
ENV VITE_PUBLIC_API_URL="https://api.safaridigital.fr"

EXPOSE 3045
ENTRYPOINT ["nginx","-g","daemon off;"]
