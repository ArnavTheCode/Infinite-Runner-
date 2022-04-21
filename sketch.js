var hero, heroimg
var city, cityimg
var villain, villainimg
function preload(){
heroimg=loadImage("Superhero.png")
cityimg=loadImage("City3.jpeg")
villainimg=loadImage("Villain.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    city=createSprite(width/2,200);
city.addImage(cityimg);
city.velocityY = 4;
hero=createSprite(200,200,50,50 )
hero.addImage(heroimg)
hero.scale=0.25
villain=createSprite(300,100,50,50)
villain.addImage(villainimg)
villain.scale=0.5
}

function draw() {
background(0)
hero.x = World.mouseX;
  
edges= createEdgeSprites();
hero.collide(edges);

hero.y = World.mouseY;
  
edges= createEdgeSprites();
hero.collide(edges);
 //code to reset the background
 if(city.y > height) {
    city.y=height/2
  }
drawSprites()
}