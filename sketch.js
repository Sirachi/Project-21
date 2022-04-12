
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var myWorld;

var ball;
var ground;
var leftSide;
var rightSide;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	myWorld = engine.world;

	ball = new Ball(200, 300, 20);
	ground = new Ground(400, 690, 800, 10);
	leftSide = new Ground(700, 690, 20, 120);
	rightSide = new Ground(600, 690, 20, 120);
	
	Engine.run(engine);
}


function draw() {
  background('black');

  ball.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  
  giveForce();

  drawSprites();
 
}

function giveForce(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.ball, ball.ball.position, {x: 1, y: -5});
	  }
}



