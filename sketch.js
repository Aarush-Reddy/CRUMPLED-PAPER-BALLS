const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, rightSide, leftSide;

let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	fill("white");
	ball = Matter.Bodies.circle(150,200,40,ball_options);
	World.add(world, ball);

	Engine.run(engine);

	groundObj = new Ground(500,486,1000,15);
	leftSide = new Ground (660,420,15,100);
	rightSide = new Ground (860,420,15,100);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse (ball.position.x,ball.position.y,40)

  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed()
{
	if (keyCode == UP_ARROW)
	{
		Matter.Body.applyForce (ball, {x: ball.position.x, y: ball.position.y}, {x:240, y: -350});
	}
}



