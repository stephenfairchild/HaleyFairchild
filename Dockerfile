FROM alpine:edge

RUN apk --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing add php8 php8-fpm php8-opcache php8-mysqli php8-json \
    php8-openssl php8-curl php8-soap php8-zlib php8-xml php8-phar php8-intl php8-dom php8-xmlreader php8-ctype php8-session php8-simplexml \
    php8-mbstring php8-gd nginx supervisor curl php8-exif php8-zip php8-fileinfo php8-iconv php8-soap tzdata htop mysql-client \
    php8-pecl-imagick php8-pecl-redis

RUN rm /etc/nginx/conf.d/default.conf

RUN ln -s /usr/bin/php8 /usr/bin/php
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && php composer-setup.php --install-dir=/usr/local/bin --filename=composer

COPY env-config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY env-config/php/fpm-pool.conf /etc/php8/php-fpm.d/www.conf
COPY env-config/php/php.ini /etc/php8/conf.d/custom.ini
COPY env-config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN mkdir -p /var/www/html

# Make sure files/folders needed by the processes are accessable when they run under the nobody user
RUN chown -R nobody.nobody /var/www/html && \
  chown -R nobody.nobody /run && \
  chown -R nobody.nobody /var/lib/nginx && \
  chown -R nobody.nobody /var/log/nginx

USER nobody
WORKDIR /var/www/html

ADD . /var/www/html
VOLUME /var/www/html

EXPOSE 8080

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
