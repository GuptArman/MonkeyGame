var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 370)
  monkey.addAnimation("Monkey", monkey_running)
  monkey.scale = 0.15
  ground = createSprite(200, 380, 400, 20)
  obsGroup = createGroup()
  bananasGroup = createGroup()
}


function draw() {
  background("white")
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  spawnOb()
  spawnBanana()
  if (monkey.isTouching(obsGroup)) {
    monkey.velocityY = 0
    obsGroup.setVelocityXEach(0)
    bananasGroup.setVelocityXEach(0)
    bananasGroup.setLifetimeEach(-999999999999999)
    obsGroup.setLifetimeEach(-999999999999)
  }
  drawSprites()
}

function spawnOb() {
  //write code here to spawn the obs
  if (frameCount % 120 === 0) {
    var ob = createSprite(600, 340, 40, 10);
    ob.addImage(obImage);
    ob.scale = 0.25;
    ob.velocityX = -3;
    //assign lifetime to the variable
    ob.lifetime = 200;
    //add each ob to the group
    obsGroup.add(ob);
  }

}

function spawnBanana() {
  //write code here to spawn the obs
  if (frameCount % 60 === 0) {
    var banana = createSprite(600, random(30, 200), 40, 10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    //assign lifetime to the variable
    banana.lifetime = 250;
    //add each ob to the group
    bananasGroup.add(banana);
  }

}