
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball_options={
		isStatic:false,
    restitution:0.3,
    friction:0,
		density:1.2
	}
  fill("white");
  ball = Bodies.circle(200,100,10,ball_options);
  World.add(world,ball);

	Engine.run(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  
  groundObj = new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  rightSide = new Ground(850,600,20,120);
  groundObj.show();
  leftSide.show();
  rightSide.show(); 
  Engine.update(engine);
  keyPressed();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
  }
  
  if (keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
  }

  if (keyCode===LEFT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.5,y:0});
   }
}