var lazerGroup;
var ground;
var gameState = 0;
var Invincibility = false;
var InvincibilityUsedOnce = false;

function setup() {
  createCanvas(800, 800);
  player = createSprite(400, 200, 20, 0);
  lazerGroup = new Group();
  ground = createSprite(400, 790, 800, 20)
}

function draw() {
  background("black");
  if (gameState === 0) {
    if (keyDown("space") && player.y >= 159 && frameCount % 25 === 0) {
      player.velocityY = -12;
    }

    player.velocityY = player.velocityY + 0.8


    if (keyDown(RIGHT_ARROW)) {
      player.x = player.x + 20
    }

    if (keyDown(LEFT_ARROW)) {
      player.x = player.x - 20
    }

    if (player.isTouching(lazerGroup) && Invincibility === false) {
      gameState = 2;
    }

    if (keyDown("i") && InvincibilityUsedOnce === false) {
      InvincibilityUsedOnce = true;
      Invincibility = true;
    }


    player.collide(ground)
    player.bounceOff(ground)
    spawnWindows()
  }
  drawSprites();


  if (gameState === 2) {
    text("You Lost Press Enter To Restart", 400, 400);
    if (keyDown(ENTER)) {
      window.location.reload()
    }
  }
}

function spawnWindows() {
  if (frameCount % 40 === 0) {
    var lazer = createSprite(800, 50, 80, 10)
    lazer.shapeColor = "brown"
    lazer.y = Math.round(random(1, 800))
    lazer.velocityX = -4;
    lazer.lifetime = 800;
    lazerGroup.add(lazer);
  }
}