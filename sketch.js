//var ball = [];

var Plinko1 = [];
var particles = [];
var division = [];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight = 300;

var Score = 0;

var P1;

var G;

function preload(){
  backgroundImg = loadImage("Background.jpg");
}


function setup() {
  createCanvas(500,750);
  
  engine = Engine.create();
  world = engine.world;

  G = new Ground(250,740,500,25);




  for(i =0; i<6;i++){
    division[i] = new Division(100*i,700,20,500);

  }

 for(x = 0; x<10;x++){
    Plinko1[x] = [];
    for(y=0;y<4;y++){
      Plinko1[x][y] = new Plinko(25+50*x,100+50*y);
    }
  }
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  push();
  fill("yellow");
  textSize(25);
  text("200",30,450)
  pop();

  push();
  fill("yellow");
  textSize(25);
  text("200",130,450)
  pop();

  push();
  fill("yellow");
  textSize(25);
  text("300",230,450)
  pop();

  push();
  fill("yellow");
  textSize(25);
  text("300",330,450)
  pop();

  push();
  fill("yellow");
  textSize(25);
  text("500",430,450)
  pop();

  push();
  fill("red");
  textSize(25);
  text("Score : "+ Score,350,50);
  pop();

  G.display();

  if(P1!=null){
  P1.display();
  }
  //P1.Score();

  //console.log(P1.body);

  for(var k = 0 ; k<6 ; k++){
    division[k].display();
  }
  
  for(var t = 0; t<10; t++){
    for(j=0;j<4;j=j+1){
      Plinko1[t][j].display();
    }
  }

}

function mousePressed(){
  P1 = new Particle(mouseX, 200);
  
}