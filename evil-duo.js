var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ballRadius = 50;
var x = canvas.width/2;
var y = canvas.height/2;

var dx = 5;
var dy = 5;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

var duoWidth = 150;
var duoHeight = 125;

function drawBall() {
  // ctx.beginPath();
  // ctx.arc(x,y, ballRadius, 0, Math.PI*2);
  // ctx.fillStyle = "green";
  // ctx.fill();
  // ctx.closePath();
  var img = document.getElementById("duo");

  ctx.drawImage(img, x, y, duoWidth, duoHeight);
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function drawGradient() {
  var gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(0.5, 'yellow');
  gradient.addColorStop(1, 'green');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  //fillText();
  drawGradient();
  ctx.font = '28px serif';
  ctx.strokeText("Looks like you missed your Spanish lesson today...", canvas.width/11, canvas.height/12);
  drawBall();
  // drawPaddle();
  x += dx;
  y += dy;
  if(rightPressed) {
    paddleX += 7;
  } else if(leftPressed) {
    paddleX -= 7;
  }
  if(x + dx > canvas.width-duoWidth / 1.25) {
    dx = -dx;
  }
  if(x + dx < 0) {
    dx = -dx;
  }
  if(y + dy < canvas.height/12) {
    dy = -dy;
  }
  if(y + dy > canvas.height-duoHeight/1.25) {
    dy = -dy;
  }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

setInterval(draw, 10);
