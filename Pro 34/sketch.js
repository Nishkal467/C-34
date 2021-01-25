const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var backgroundImg

function preload() {
  backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000,800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 600, 1200, 20);
  hero = new Hero(400,800,100,100);
  attach = new Fly(hero.body,{x:100,y:465})

  block1 = new Block (280,350,30,40);
  //block1 = new Block (280,350,30,40);
  //block1 = new Block (280,350,30,40);



}
function draw() {
  background(backgroundImg);
  ground.display();
  hero.display();
  block1.display();
  mouseReleased();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    attach.fly();

  
}