#!/bin/sh

docker run -it --rm --link teleinfo-activemq:mq -e DEV=true -e ACTIVEMQ_USER=publisher -e ACTIVEMQ_PASSWORD=publisher -v $PWD:/home/app node-runtime-dev
