FROM node:21-alpine3.17

WORKDIR /var/www

COPY . ./

RUN npm install

RUN npm install -g serve

RUN npm run build

RUN mkdir ./build/dev/
RUN mkdir ./build/dev/css
RUN mkdir ./build/dev/fonts
RUN mkdir ./build/dev/img
RUN mkdir ./build/dev/js

# copy files into dev when serving app from /dev
RUN cp ./build/css/* ./build/dev/css/
RUN cp ./build/fonts/* ./build/dev/fonts/
RUN cp -r ./build/img/ ./build/dev/
RUN cp ./build/js/* ./build/dev/js/
RUN cp ./build/index-* ./build/dev/

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]

# terminal
# docker build -t metzner-frontend -f docker/metzner/metzner/metzner-frontend.dockerfile .
# docker run --name metzner-frontend -dp 3000:3000 metzner-frontend

# docker hub
# docker build -t ddrram/metzner-frontend:1.1.1 -f docker/metzner/metzner-frontend.dockerfile .
# docker push ddrram/metzner-frontend:1.1.1
# docker run --name metzner-frontend -dp 3000:3000 ddrram/metzner-frontend:1.1.1
