var Stomp = require('stomp-client');

var destination = '/topic/electricity/metrics';
var user = process.env.ACTIVEMQ_USER;
var pass = process.env.ACTIVEMQ_PASSWORD;
var port = 61613;

var client = new Stomp('mq', port, user, pass);

client.connect(function(sessionId) {
    client.subscribe(destination, function(body, headers) {
      console.log('Message received:', body);
    });

    var metrics = { watts: 340, amperes: 1, heurescreuses: 10000000, heurespleines: 50000000 };
    client.publish(destination, JSON.stringify(metrics));
});
