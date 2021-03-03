const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero,ground;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;

  // create sprites here
hero=new Hero(700,350,50,50);



}

function draw() {
  background("white");
hero.display();
}

