
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8;
var border1,border2,border3,border4;
var particle; 
var plinko;
var particles=[];
var plinkos=[];


function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground1=new Ground(240,790,800,10)
	ground2=new Ground(10,680,10,400)
	ground3=new Ground(470,680,10,400)
	ground4=new Ground(80,680,10,400)
	ground5=new Ground(160,680,10,400)
	ground6=new Ground(240,680,10,400)
	ground7=new Ground(320,680,10,400)
	ground8=new Ground(400,680,10,400)
	
	border1=new Border(0,400,10,900)
    border2=new Border(480,400,10,900)
	border3=new Border(240,795,900,10)
	border4=new Border(240,5,900,10)


}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  border1.display();
  border2.display();
  border3.display();
  border4.display();






if(frameCount%60===0){
	particles.push(new Particles(random(width/2-10,width/2+10),10,10))
}
 
  for(var i=0; i<particles.length; i++){
  particles[i].display()
	}
	

	for(var j=0; j<width; j=j+50){
		 plinkos.push(new Plinko(j,175))
		
		  }

		  for(var a=0; a<width; a=a+50){

		   plinkos.push(new Plinko(a,75))
			 }

			 for(var b=0; b<width; b=b+50){
				plinkos.push(new Plinko(b,175))
			   
				 }
	   
				 for(var c=0; c<width; c=c+50){
	   
				  plinkos.push(new Plinko(c,275))
					}

					for(var d=0; d<width; d=d+50){
	   
						plinkos.push(new Plinko(d,375))
						  }
  
  drawSprites();
 
}



