var explorer, expWalking

function preload() {
  expWalking = loadAnimation("walkingAnimation/1.PNG","walkingAnimation/2.PNG")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  explorer = createSprite(400, 200, 50, 50);
  explorer.scale = 3
  explorer.addAnimation("walking",expWalking)

  
}


function draw() {
  background("pink");  
  drawSprites();
}