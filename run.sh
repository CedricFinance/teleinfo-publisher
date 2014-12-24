#!/bin/sh

docker run -it --rm --link teleinfo-activemq:mq teleinfo-publisher
