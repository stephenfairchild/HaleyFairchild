FROM khromov/alpine-nginx-php8 AS base
#RUN yum clean all
#RUN sed -i --follow-symlinks "s/error_reporting = .*/error_reporting = E_ALL/" /etc/php.ini /etc/php-fpm.d/php.ini
COPY nginx/nginx.conf /etc/nginx
VOLUME /var/www/html
EXPOSE 80
#EXPOSE 3000
#ENVAPPLICATION_ENV=development
