var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 300;

var dx = 1;
var dy = -1;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 5;
var brickColumnCount = 9;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 0;
var brickOffsetTop = 50;
var brickOffsetLeft = 0;

var bricks = [];
for(var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for(var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {x: 0, y: 0, status : 1};
  }
}

var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;

var score = 0;

var lives = 3;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x,y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "gray";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function drawBricks(){
  for(var c = 0; c < brickColumnCount; c++) {
    for(var r = 0; r < brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (r*(brickHeight+brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        if(r === 0) ctx.fillStyle = 'red';
        if(r === 1) ctx.fillStyle = 'orange';
        if(r === 2) ctx.fillStyle = 'yellow';
        if(r === 3) ctx.fillStyle = 'green';
        if(r === 4) ctx.fillStyle = 'blue';
        // if(r === 5) ctx.fillStyle = 'purple';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawBackground(){
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBackground();
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  x += dx;
  y += dy;
  if(rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width){
      paddleX = canvas.width - paddleWidth;
    }
  } else if(leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      if(!lives) {
        alert("GAME OVER");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
  requestAnimationFrame(draw);
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

function collisionDetection() {
  for(var c = 0; c < brickColumnCount; c++) {
    for(var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1){
        if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          // add acceleration in the future
          // if(bricks[r] === 4) dx = 1.2; dy = 1.2;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

draw();
