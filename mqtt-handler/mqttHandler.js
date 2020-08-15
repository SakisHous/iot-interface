const mqtt = require('mqtt');

class MqttHandler {
  constructor(topic) {
    this.mqttClient = null;
    this.host = 'mqtt://test.mosquitto.org';
    this.topic = topic;
  }

  connect() {

    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host);

    // Mqtt error callback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`MQTT client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe(this.topic, { qos: 0 });

    this.mqttClient.on('close', () => {
      console.log(`MQTT client disconnected`);
    });

    // When a message arrives, console.log it
    //  this.mqttClient.on('message', function (topic, message) {
    //    console.log(message.toString());
    //  });
  }
  // we expect a "message" option 
  getMessage(option, callback) {
    this.mqttClient.on(option, function (topic, message) {
      return callback(message.toString());
    });
  };


  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish(this.topic, message);
  }
}

module.exports = MqttHandler;
