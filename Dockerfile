# Building layer
FROM node:18-alpine as development
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM nginx:1.20-alpine as production
RUN rm /usr/share/nginx/html/50x.html /usr/share/nginx/html/index.html

# Copy production build
COPY --from=development /app/dist /usr/share/nginx/html

