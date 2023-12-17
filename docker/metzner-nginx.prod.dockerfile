FROM nginx

WORKDIR /

EXPOSE 80

EXPOSE 443

RUN rm /usr/share/nginx/html/*

COPY ./nginx/nginx.prod.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

# terminal
# docker build -t metzner-nginx-prod -f docker/metzner-nginx.prod.dockerfile .
# docker run --name metzner-nginx-prod -dp 80:80 -p 443:443 metzner-nginx-prod

# docker hub
# docker build -t ddrram/metzner-nginx-prod:1.1.0 -f docker/metzner-nginx.prod.dockerfile .
# docker push ddrram/metzner-nginx-prod:1.1.0
# docker run --name metzner-nginx-prod -dp 8080:8080 ddrram/metzner-nginx-prod:1.1.0
