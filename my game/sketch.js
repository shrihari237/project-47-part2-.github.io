var backgroundImg,bg;
var spaceShip,spaceShipImg;
var meteorImg,meteor
var star,starImg;

var score = 0 

var END = 0;
var PLAY = 1;
var gameState = PLAY;

var starsGroup;
var meteorsGroup;


function preload(){
backGroundImg = loadImage("assest/backGround.jpg");
spaceShipImg = loadImage("assest/spaceShip4.png");
meteorImg = loadImage("assest/meteor4.png");
starImg = loadImage("assest/star2.png")

}

function setup(){
createCanvas(windowWidth,windowHeight);
//backgroundImg.scale = 0.5;




bg = createSprite(windowWidth/2,windowHeight/2,50,50);
bg.addImage(backGroundImg);
bg.velocityY=5;
bg.scale = 3.2;

spaceShip = createSprite(windowWidth/2,windowHeight-120,50,50);
spaceShip.addImage(spaceShipImg);
spaceShip.scale = 0.25

starsGroup = new Group();
meteorsGroup = new Group();

}


function draw(){
 // background(0);
 fill("white")
 strokeWeight(10);
 stroke("white")
  textSize(40);
 text("Score:"+score,windowWidth-250,windowHeight-350);


 
 if(gameState === PLAY){
  if(bg.y>500){
    bg.y=bg.width/2;

  
    if(keyIsDown(RIGHT_ARROW)){
      spaceShip.position.x +=5
    }
    
    if(keyIsDown(LEFT_ARROW)){
       spaceShip.position.x -=5
    }
    
    if(spaceShip.isTouching(starsGroup)){
    score +=5;
    }
    
    if(spaceShip.isTouching(meteorsGroup)){
     gameState = END;
    }
    
   
  }

 }
else if(gameState === END){
  background.velocityY = 1000;
  meteorsGroup.setvelocityYEach = 0;
  starsGroup.setvelocityYEach = 0;
}
spawnstars();
spawnmeteors();
drawSprites();
}










function spawnstars() {
  
  if (frameCount % 60 === 0) {
    var  star = createSprite(700,100)
      star.addImage(starImg);
     star.scale=0.3;
      star.x=Math.round(random(70,1400));
      star.velocity.y=+5
      starsGroup.setlifeTimeEach = 10
      spaceShip.depth = star.depth;
      spaceShip.depth = spaceShip.depth +1;

      starsGroup.add(star);
      
    }
  }
  
  function spawnmeteors(){
    if (frameCount % 40 === 0) {
      var  meteor = createSprite(700,100)
        meteor.addImage(meteorImg);
       meteor.scale=0.5;
        meteor.x=Math.round(random(70,1400));
        meteor.velocity.y=+5
        meteor.setlifeTimeEach = 10

        spaceShip.depth = meteor.depth;
        spaceShip.depth = spaceShip.depth +1;

        meteorsGroup.add(meteor);
      }
  }


