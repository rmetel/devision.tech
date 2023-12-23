FROM nginx

WORKDIR /

EXPOSE 80

EXPOSE 443

RUN rm /usr/share/nginx/html/*

COPY /nginx/nginx.local.conf /etc/nginx/nginx.conf

COPY cert.* /etc/nginx/certs/

CMD ["nginx", "-g", "daemon off;"]

# terminal
# docker build -t metzner-nginx-local -f docker/metzner/metzner-nginx.local.dockerfile .
# docker run --name metzner-nginx-local -dp 80:80 -p 443:443 metzner-nginx-local

# docker hub
# docker build -t ddrram/metzner-nginx-local:1.0.0 -f docker/metzner-nginx.local.dockerfile .
# docker push ddrram/metzner-nginx-local:1.0.0
# docker run --name metzner-nginx-local -dp 8080:8080 ddrram/metzner-nginx-local:1.0.0
