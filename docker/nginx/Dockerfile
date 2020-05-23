FROM nginx:stable-alpine

RUN apk upgrade --update

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/error/ /etc/nginx/error/

COPY laravel /var/www/html/phpapp

# Run
COPY docker/nginx/run.sh /var/run/run.sh
CMD  ["/var/run/run.sh", "&"]
