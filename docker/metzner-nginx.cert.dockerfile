FROM nginx

WORKDIR /

EXPOSE 80

EXPOSE 443

RUN rm /usr/share/nginx/html/*

COPY ./nginx/nginx.cert.conf /etc/nginx/nginx.conf

COPY ./public /var/www/public

CMD ["nginx", "-g", "daemon off;"]

# terminal
# docker build -t metzner-nginx-cert -f docker/metzner-nginx.cert.dockerfile .
# docker run --name metzner-nginx-cert -dp 80:80 -p 443:443 metzner-nginx-cert

# docker hub
# docker build -t ddrram/metzner-nginx-cert:1.1.0 -f docker/metzner-nginx.cert.dockerfile .
# docker push ddrram/metzner-nginx-cert:1.1.0
# docker run --name metzner-nginx-cert -dp 8080:8080 ddrram/metzner-nginx-cert:1.1.0
