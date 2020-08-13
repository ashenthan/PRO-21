var bullet;
var wall;
var speed, weight,thickness;
function setup() {
  createCanvas(1400,400);
  speed = random(223,321);
  thickness = random(28,83);
  weight = random(30,52);
  bullet = createSprite(50, 200, 30, 10);
bullet.shapeColor = color(255,255,255);
  wall = createSprite(1100, 200, thickness, 100);
  wall.shapeColor= color(225,225,225);
bullet.velocityX = speed;
 
}

function draw() {
  background(0,0,0);
 if(wall.x-bullet.x < (bullet.width+wall.width/2)){
  var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
 if(damage>10){
     bullet.collide(wall);  
     bullet.velocityX = 0;
     bullet.shapeColor = color(255,0,0);
   }
   if(damage>0 && damage<10){
    bullet.collide(wall);  
    bullet.velocityX = 0;
    bullet.shapeColor = color(0,255,0);
  }
  

 }

  drawSprites();
} 