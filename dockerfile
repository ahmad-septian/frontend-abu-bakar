FROM node:21-alpine as builder
WORKDIR /app

ARG VITE_API
ENV VITE_API=$VITE_API

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm run build
RUN ls -la /app/dist

# server environment
FROM nginx:alpine
# WORKDIR /usr/share/nginx/html
RUN apk update && apk upgrade --no-cache
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/configfile.template
# COPY --from=builder /app/dist /usr/share/nginx/html


ENV PORT 80
ENV HOST 0.0.0.0
EXPOSE 80

#CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
CMD ["sh", "-c", "envsubst '$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]