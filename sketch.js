const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rain = new Drop(200, 200, 50);

function preload(){
    
}

function setup(){
    ellipseMode(CENTER);
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    background("black");
    Engine.update(engine);

    rain.display();

    drawSprite();    
}   

