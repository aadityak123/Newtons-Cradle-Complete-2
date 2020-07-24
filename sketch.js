
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	dia=40;

	startX=width/2;
	startY=height/4+500;
	bobObject1=new Bob(startX-dia*2,startY,dia);
	bobObject2=new Bob(startX-dia,startY,dia);
	bobObject3=new Bob(startX,startY,dia);
	bobObject4=new Bob(startX+dia,startY,dia);
	bobObject5=new Bob(startX+dia*2,startY,dia);
	
	
	//Create a Ground
	

	

	rope1=new rope(bobObject1.body,roofObject.body,-dia*2, 0)

	rope2=new rope(bobObject2.body,roofObject.body,-dia*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,dia*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,dia*2, 0)

	
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}







