const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var canvas;
var gameState;
var sling;

function preload(){
  bg = loadImage("bg.jpg");
}

function setup() {
  canvas = createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(500, 400, 450, 10);
  block = new Block(400, 170, 30, 70);
  block1 = new Block(455, 170, 30, 70);
  block2 = new Block(510, 170, 30, 70);
  block3 = new Block(565, 170, 30, 70);
  block4 = new Block(620, 170, 30, 70);
  block5 = new Block(455, 100, 30, 70);
  block6 = new Block(510, 100, 30, 70);
  block7 = new Block(565, 100, 30, 70);
  block8 = new Block(510,20, 30, 70);

  hexa = new Polygon(200, 50, 75, 50);
  sling = new Slingshot(hexa.body, {x:10, y:40});
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground1.display();
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();

  block5.display();
  block6.display();
  block7.display();

  block8.display();
  
  hexa.display();
  sling.display();
  console.log(sling);
}
function mouseDragged(){
      Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
  gameState = "launched";
}