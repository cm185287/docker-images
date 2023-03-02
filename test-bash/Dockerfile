FROM alpine:3.16
WORKDIR /usr/app
COPY ./script.sh ./script.js /usr/app/
RUN apk add --update nodejs npm
COPY package.json /usr/app/
RUN npm install
RUN chmod +x /usr/app/script.sh
ENTRYPOINT ["/usr/app/script.sh"]