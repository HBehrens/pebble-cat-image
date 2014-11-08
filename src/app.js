/**
 * Example written at Toyota Hackathon
 *
 * Cat Image created by Tenoch Gonzalez
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Window({fullscreen: true});

var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/weather_cat.png',
  backgroundColor: "white"
});
main.add(image);

var textfield = new UI.Text({
 position: new Vector2(0, -5),
 size: new Vector2(144, 24),
 color: "black",
 font: 'gothic-24-bold',
 text: 'pet me',
  textAlign: "center"
});
main.add(textfield);

main.on('click', 'select', function(e) {
  textfield.text("meeoow 😄");
});

main.on('click', 'up', function(e) {
  textfield.text("grrrr 😺");
});

main.on('click', 'down', function(e) {
  textfield.text("mooaaarr");
});

main.show();
