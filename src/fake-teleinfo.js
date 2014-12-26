var events = require('events');

function random(minValue, maxValue) {
  var rand = Math.random();
  return Math.floor(rand * (maxValue - minValue) + minValue);
}

function nextFrame(frame) {
  frame.HCHC += random(1, 10);
  frame.HCHP += random(1, 10);
  frame.PAPP = Math.max(0, frame.PAPP + random(-100, 100));
  frame.IINST = Math.max(0, frame.IINST + random(-3, 3));
}

function publish(emitter, frame) {
  emitter.emit('tramedecodee', frame);
  nextFrame(frame);
}

module.exports = function() {
  var frameEvents = new events.EventEmitter();

  var frame = { PAPP: 340, IINST: 1, HCHC: 10000000, HCHP: 50000000 };

  setInterval(publish, 1000, frameEvents, frame);

  return frameEvents;
}
