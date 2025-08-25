var PLAY = 1;
var END = 0;
var gameState = PLAY;

var P1, P1_running, P1_death, P1_shot;
var foguinho;
var invisibleGround, backgroundImage;

var background1;

var backgroundImg;
var score=0;
var Pd;
var gameOver, gameOverImg, restart;


function preload(){
  
  backgroundImg = loadImage("assets/background.jpg");
  
  Pd = loadAnimation("assets/P.png")
  P1_running = loadAnimation("assets/1.png","assets/2.png","assets/3.png","assets/4.png","assets/5.png","assets/6.png","assets/7.png","assets/8.png","assets/9.png");
  P1_death = loadAnimation("assets/1m.png","assets/2m.png","assets/3m.png","assets/4m.png");
  P1_shot = loadAnimation("assets/1+.png","assets/2+fogo1.png","assets/3+fogo2.png","assets/4+fogo3.png");
  
  gameOverImg = loadImage("assets/gameOver.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  P1 = createSprite(50,height-47,20,50);
  
  P1.addAnimation("stop", Pd);
  P1.addAnimation("running", P1_running);
  P1.addAnimation("death", P1_death);
  P1.setCollider('circle',0,0,350);
  P1.scale = 1.5
  
  invisibleGround = createSprite(683,height-10,width,10);  
  invisibleGround.shapeColor = "#f4cbaa";
  
  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);
  
  gameOver.scale = 0.5;

  gameOver.visible = false;
  
  invisibleGround.visible =false
  
  score = 0;
}

function draw() {
  background(backgroundImg);
  
  if (gameState===PLAY){
    
    if(keyDown("a")){
      P1.x+=-10
      P1.changeAnimation("running");
    }

    if(keyDown("d")){
      P1.x+=10
      P1.changeAnimation("running");
    }

    if(keyWentUp("a")){
      P1.changeAnimation("stop");
    }

    if(keyWentUp("d")){
      P1.changeAnimation("stop");
    }

    if((touches.length > 0 || keyDown("SPACE")) ) {
      P1.y = P1.y -10;
      
    }
    
    P1.velocityY = P1.velocityY + 0.8
  
    if (background.x < 0){
      background.x = background.width/2;
    }
  
    // P1.collide(invisibleGround);
    
    //defina a velocidade de cada objeto do jogo para 0
    background.velocityX = 0;
    P1.velocityY = 0;
    
    
    //P1.changeAnimation("death",P1_death);
    
    // if(touches.length>0 || keyDown("SPACE")) {      
    //   reset();
    //   touches = []
    // }
  }
  
  
  drawSprites();
}

/*function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    var cloud = createSprite(width+20,height-300,40,10);
    cloud.y = Math.round(random(100,220));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //atribua tempo de vida à variável
    cloud.lifetime = 300;
    
    //ajustar a profundidade
    cloud.depth = trex.depth;
    trex.depth = trex.depth+1;
    
    //adicione cada nuvem ao grupo
    cloudsGroup.add(cloud);
  }
  
}*/

/*function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,height-95,20,30);
    obstacle.setCollider('circle',0,0,45)
    // obstacle.debug = true
  
    obstacle.velocityX = -(6 + 3*score/100);
    
    //gerar obstáculos aleatórios
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }
    
    //atribua dimensão e tempo de vida aos obstáculos           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    obstacle.depth = trex.depth;
    trex.depth +=1;
    //adicione cada obstáculo ao grupo
    obstaclesGroup.add(obstacle);
  }
}*/
