var express = require('express');
var router = express.Router();
const mqttHandler = require('../mqtt-handler/mqttHandler');
const topic = 'bme280/id2020/data';
const topicLed = 'client2020/esp8266/led';

/* GET home page. */
router.get('/', function (req, res, next) {

  res.cookie('streamData', { description: 'Sensor', started: 2020 });
  const mqttClient = new mqttHandler(topic);
  const clientLED = new mqttHandler(topicLed);

  mqttClient.connect();
  clientLED.connect();

  // establish a socket connection with client
  req.app.io.on('connection', (socket) => {

    mqttClient.getMessage("message", (msg) => {
      const obj = JSON.parse(msg);

      const eventD = new Date();
      timestamp = eventD.getHours().toString() + ':' + eventD.getMinutes().toString() + ':' + eventD.getSeconds().toString();
      //console.log(obj);
      socket.emit('data', {
        time: timestamp,
        temperature: obj.temperature,
        humidity: obj.humidity,
        pressure: obj.pressure,
        altitude: obj.altitude
      });
    });


    socket.on('openMsg', (msg) => {
      console.log(msg);
      clientLED.sendMessage("1");
    });

    socket.on('closeMsg', (msg) => {
      console.log(msg);
      clientLED.sendMessage("0");
    })
  });

  res.render('index', { title: 'Home Environment' });
});

/*
router.get('/cookie', (req, res) => {
  res.send(req.cookies);
});
*/
module.exports = router;
