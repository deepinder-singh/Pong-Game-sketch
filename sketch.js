var playerPaddle;
var ball;

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background("Yellow");  

//Creating the playerPaddle
rectMode(CENTER);
fill("Red");
noStroke();
playerPaddle = new Paddle(380,mouseY,10,60);
playerPaddle.display();

//Creating the computerPaddle
computerPaddle = new Paddle(20,200,10,60);
computerPaddle.display();

//Creating the ball
fill("Blue");
ball = new Ball(200,200,10,10);
ball.display();


  
}