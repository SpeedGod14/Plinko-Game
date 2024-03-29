const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(480, 800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(240, 775, 480, 10);

  for(var k = 0; k <= width; k = h + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }

for(var j =15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }


}

function draw() {
  background(255,255,255);

  if (frameCount % 90 === 0){
    
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  drawSprites();
}

for(var j = 0; j < particles.length; j++){
  particles[j].display();
} 