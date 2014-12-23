var Stomp = require('stomp-client');

var destination = '/topic/electricity/metrics';
var user = process.env.ACTIVEMQ_USER;
var pass = process.env.ACTIVEMQ_PASSWORD;
var port = 61613;

var client = new Stomp('mq', port, user, pass);

function random(minValue, maxValue) {
  var rand = Math.random();
  return Math.floor(rand * (maxValue - minValue) + minValue);
}

client.connect(function(sessionId) {
    var metrics = { watts: 340, amperes: 1, heurescreuses: 10000000, heurespleines: 50000000 };

    function publish() {
      client.publish(destination, JSON.stringify(metrics));
      metrics.heurescreuses += random(1, 10);
      metrics.heurespleines += random(1, 10);
      metrics.watts = Math.max(0, metrics.watts + random(-100, 100));
      metrics.amperes = Math.max(0, metrics.amperes + random(-3, 3));
    }
    setInterval(publish, 1000);
});
