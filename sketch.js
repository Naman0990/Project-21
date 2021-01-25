var bullet, speed, weight;
var wall;
function setup() {
  createCanvas(800,400);
  speed = random (55, 90);
  weight = random (400, 500)
  bullet = createSprite (50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapecolor = color(255);
  thickness = random (22, 83);
  wall = createSprite (1500, 200, 60, height/2);
  wall.shapecolor = color(80, 80, 80);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  function hasCollided(Lbullet, Lwall){
    bulletRightEdge=1bullet.x +1bullet.width;
    wallLeftEdge=1wall.x;{
      Return true
    }
    Return false;
  }
  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)
    if (damage>10){
      wall.shapeColor=color(255, 0, 0)
    }
    if (damage<10){
      wall.shapeColor=color(0, 255, 0)
    }
  }
}