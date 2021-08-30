const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constaint = Matter.Constaint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bubble, bubble_Img;
var plank;
var ground;
var con;
var con2;
var rope;
var rope2;
var rabbit;
var bg_Img;
var sad;
var eat;
var blink;
var fruit;
var mute_Btn;

function preload(){
bubble_Img = loadImage("bubble.png");
bg_Img = loadImage("background.png");
rabbit = loadImage("Rabbit-01.png");
fruit = loadImage("melon.png");
blink = loadAnimation("blink_1.png", "blink_2.png", "blink_3.png");
eat = loadAnimation("eat_0.png", "eat_1.png", "eat_2.png","eat_3.png", "eat_4.png");
sad = loadAnimation("sad_1.png", "sad_2.png", "sad_3.png");

blink.playing = true;
eat.playing = true;
eat.looping = false;
sad.playing = true;
sad.looping = false;
}




function setup() {
  createCanvas(500,800);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  var fruit_options = {
    restituition:0.8
  }
  ground = new Ground(250,height-10,width,20);
  fruit = Bodies.circle(100,400,15,fruit_options);
  World.add(world,fruit);
}

function draw() {
  background(255,255,255);  
  ground.show();
  drawSprites();
}