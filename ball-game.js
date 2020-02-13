var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ballRadius = 100;
var x = canvas.width/2;
var y = canvas.height-300;

var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
  if(x + dx > canvas.width-ballRadius) {
    dx = -dx;
  }
  if(x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  if (y + dy > canvas.height-ballRadius) {
    dy = -dy;
  }
}

setInterval(draw, 10);
