FROM nginx

WORKDIR /

EXPOSE 80

EXPOSE 443

RUN rm /usr/share/nginx/html/*

COPY ./nginx/nginx.dev.conf /etc/nginx/nginx.conf

COPY cert.* /etc/nginx/certs/

CMD ["nginx", "-g", "daemon off;"]

# terminal
# docker build -t metzner-nginx -f docker/metzner-nginx.dev.dockerfile .
# docker run --name metzner-nginx -dp 80:80 -p 443:443 metzner-nginx

# docker hub
# docker build -t ddrram/metzner-nginx-dev:1.0.0 -f docker/metzner-nginx.dev.dockerfile .
# docker push ddrram/metzner-nginx-dev:1.0.0
# docker run --name metzner-nginx-dev -dp 8080:8080 ddrram/metzner-nginx-dev:1.0.0
