FROM nginx

WORKDIR /

EXPOSE 80

EXPOSE 443

RUN rm /usr/share/nginx/html/*

COPY ./nginx/nginx.test.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

# terminal
# docker build -t metzner-nginx-test -f docker/metzner-nginx.test.dockerfile .
# docker run --name metzner-nginx-test -dp 80:80 -p 443:443 metzner-nginx-test

# docker hub
# docker build -t ddrram/metzner-nginx-test:1.1.0 -f docker/metzner-nginx.test.dockerfile .
# docker push ddrram/metzner-nginx-test:1.1.0
# docker run --name metzner-nginx-test -dp 80:80 -p 443:443 ddrram/metzner-nginx-test:1.1.0
