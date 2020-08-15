# Remote-Control-Panel


This is a demonstration of a remote control panel. It is built with [Expressjs](https://expressjs.com/) and [Socketio](https://socket.io/) for the back end. In addition,  for the presentation of the data we used the open source [Chartjs](https://www.chartjs.org/) library. A demonstration of user interface (UI) is shown bellow.

![alt text](https://github.com/SakisHous/iot-interface/tree/master/images)

The purpose of this repo is not to demonstrate a SCADA software, rather than a simple platform for IoT applications related to small businesses. Good examples are agriculture sector and smart buildings where you can monitor the environmental conditions, switch on/off water heater or electric water valve.


## Device 

For the data acquisition we used ESP8266 module running  MQTT protocol and BME280 sensor for environmental variables. For the implementation of MQTT protocol we used the [example](https://github.com/knolleary/pubsubclient/blob/master/examples/mqtt_esp8266/mqtt_esp8266.ino) and for BME280 sensor the libraries, [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor) and [Adafruit_BME280](https://github.com/adafruit/Adafruit_BME280_Library).

## Other options

There are other options varied with the range such as GSM, SigFox and LoRa which the device could support. The right option is a result of many factors with the most important the economic factor.


## Implemention machine learning algorithms

Collecting enough data and making a training set you can train your own model and predict features important for each case. This business model is applied in many sectors such as agriculture or utilities (energy consumption).


## Next steps

Some of the next steps are a database connection (preferably MongoDB) for storage, an authentication system (user should have an account), a more robust and secure websocket implementation and HTTP GET/POST request for adding new data.
