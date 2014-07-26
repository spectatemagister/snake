var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };

var width =  window.innerWidth;
var height =  window.innerHeight;

var canvas = document.createElement('canvas');

var context = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var game = new Game();

var update = function() {
    game.update();
};

var render = function() {
  //render background
  var w = window.screen.width;
  var h = window.screen.height;
  context.fillStyle = "#3399FF";
  context.fillRect(0, 0, w, h);

  game.render(context);
};

var step = function() {
  update();
  render();
  animate(step);
};