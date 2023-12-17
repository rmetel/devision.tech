FROM node:21-alpine3.17

WORKDIR /var/www

COPY . ./

RUN npm install

RUN npm install -g serve

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]

# terminal
# docker build -t metzner-frontend -f docker/metzner-frontend.dockerfile .
# docker run --name metzner-frontend -dp 3000:3000 metzner-frontend

# docker hub
# docker build -t ddrram/metzner-frontend:1.0.0 -f metzner-frontend.dockerfile .
# docker push ddrram/metzner-frontend:1.0.0
# docker run --name metzner-frontend -dp 3000:3000 ddrram/metzner-frontend:1.0.0
