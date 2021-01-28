var bg, bg_img;
var bird, bird_img;
var ground;
var ground, ground_img;

function preload() {
  bg_img = loadImage("Background.png");
  bird_img = loadImage("Flappy Bird.png");
   ground_img = loadImage("Ground.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight
  );
  bg.addImage(bg_img);
  bg.scale = 2.7;
  bg.velocityX = -3;

  bird = createSprite(windowWidth / 2 - 200, windowHeight / 2, 10, 10);
  bird.addImage(bird_img);
  bird.scale = 0.27;

  ground = createSprite(windowWidth / 2, windowHeight - 10, windowWidth, 20);
  ground.shapeColor = "green";

  ground = createSprite(windowWidth / 2, windowHeight - 1);
  ground.addImage(ground_img);
}

function draw() {
  background(0);

  if (bg.x < windowWidth - 1200) {
    bg.x = windowWidth / 2;
  }

  if (keyDown("space")) {
    bird.velocityY = -10;
  }

  bird.velocityY = bird.velocityY + 1;

  drawSprites()
}
