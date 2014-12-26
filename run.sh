#!/bin/sh

docker run -it --rm -e DEV=true --link teleinfo-activemq:mq teleinfo-publisher
