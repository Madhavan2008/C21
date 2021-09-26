var Bullet,wall;
var speed,weight,thickness;
var Damage;
function setup() {
  createCanvas(1600,400);
 Bullet=createSprite(100, 200, 100, 50);
 thickness=random(22,83);
 Bullet.shapeColor="white"
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=rgb(80,80,80);
 speed=random(223,321);
  weight=random(30,52);
 Bullet.velocityX=speed;
}

function draw() {
  background("Black"); 
   if(hasCollided){
    Damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(Damage>10){
      wall.shapeColor="Red"
    }
    if(Damage<10){
      wall.shapeColor="Green"
    }
    Bullet.collide(wall);
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  if(Bullet.x+Bullet.width/2>wall.x-wall.width/2){
    return true;
  }else{
    return false
  }
}