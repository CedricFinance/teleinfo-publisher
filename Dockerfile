FROM node:latest

ENV ACTIVEMQ_USER publisher
ENV ACTIVEMQ_PASSWORD publisher

RUN useradd -m app

USER app
WORKDIR /home/app

ADD package.json /home/app/
RUN npm install

ADD src /home/app/src

CMD node src/app.js
