const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var engine, world;
var dummy, enemy;
var platform1, platform2, platform3, patform4, platform5, platform6;

function preload(){
    backgroundImage = loadImage("sprites/Default.png");
}

function setup(){
    var canvas = createCanvas(2500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(7500, 0, 1500,150);
    platform = new Ground(150, 305, 300, 170);
    dummy = new Dummy(100, 50, 35, 50);
    enemy = new Enemy( 50, 50, 10, 20);
    platform1 = new Platform(950, 400, 100, 40);
    platform2 = new Platform(370, 250, 850, 20);
    platform3 = new Platform(1250, 450, 450, 20);
    //this is  basically a stepstool for the zigs
    platform4 = new Platform(1350, 430, 145, 56);
    //these until platform __ are what the zigzag patterns are.
    platform5 = new Platform(1550, 335, 150, 40);
    platform6 = new Platform(1650, 410, 150, 40);
    platform7 = new Platform(1750, 335, 150, 40);
    platform8 = new Platform(1900, 360, 100, 40);
    platform10 = new Platform(2100, 360, 100, 40);
    platform11 = new Platform(2300, 360, 100, 40);
    spike1 = new Spike(1700, 360, 200, 200);
    
}

function draw(){
    background(backgroundImage);
    strokeWeight(4);
    dummy.display();
    enemy.display();
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
    platform5.display();
    platform6.display();
    platform7.display();
    platform8.display();
    platform10.display();
    platform11.display();
    spike1.display();

    //Jump Function for Dummy.    
if(keyCode === 32)
{
 dummy.velocityY = -2;
}
};




