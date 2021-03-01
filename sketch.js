const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball_img
var ball
var g1
var slingshot


function preload() {
}

function setup(){
    
    var canvas = createCanvas(1200,400);
    engine=Engine.create()
    world=engine.world;
    ball=new Ball(200,200,30)
    slingshot=new SlingShot(ball.body,{x:100,y:200})
     g1=new Ground(400,200,200,10)
}

function draw(){
    background("white")
    Engine.update(engine);
    g1.display();
    slingshot.display();
    ball.display();
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

