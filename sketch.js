var thickness,wall;
var bullet,speed, weight
var deformation;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
bullet=createSprite(50,200,30,40);
wall=createSprite(1200,200,60,height/2);
bullet.velocityX=3;
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=3;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
  bullet.velocityX=0;
}
if(damage<10)
{
  wall.shapeColor=color(255,0,0);
  bullet.velocityX=0;
}
  }




  drawSprites();
  }
  function hasCollided(lbullet,lwall)
  {
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
  }
  return false;
}