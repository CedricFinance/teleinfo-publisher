teleinfo-publisher
==================

Electricity metrics publisher for the teleinfo project

Usage
-----

    docker run -it --rm -e DEV=true --link teleinfo-activemq:mq cedricfinance/teleinfo-publisher

When the `DEV` environment variable is set to true, the publisher switches to development mode. It produces fake metrics.

In production mode, the serial port must be connected to the electicity meter (for more infos: http://lhuet.github.io/blog/2014/01/montage-teleinfo.html).