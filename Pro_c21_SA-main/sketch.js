const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball 
var forceUp
var forceRight


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,701,800,20);
  right = new Ground(790,200,20,1200);
  left = new Ground(10,200,20,1200);
  top_wall = new Ground(200,10,1200,20);
  var ball_options = {
    restitution : 0.95
  }
  ball = Bodies.circle(400,400,20,ball_options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  forceUp = createImg('up.png')
  forceUp.position(30,30)
  forceUp.size(30,30)
  forceUp.mouseClicked(applyForceUp)

  forceRight = createImg('right.png')
  forceRight.position(60,70)
  forceRight.size(30,30)
  forceRight.mouseClicked(applyForceRight)
}

function draw() 
{
  background(51);
  ellipse(ball.position.x , ball.position.y , 20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function applyForceUp(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
}
function applyForceRight(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}