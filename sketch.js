const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper1;
var ground;
var side1, side2, side3, side1Image;

function preload(){
	side1Image = loadImage("dustbin.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    side1 = new box(1000,350,10,100)
	
	
	side2 = new box(1100,350,10,100)
    
    paper1 = new paper(200,100,40);
	ground = new Ground(600,380,1200,10)
	

}

function draw(){
    background(238,130,238);
    Engine.update(engine);
    paper1.display();
    ground.display();
    side1.display();
	side2.display();
	image(side1Image,989, 300,130,100);
	

}
function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,	{x:25,y:-50}); 
    }
}