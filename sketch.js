var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(1280,720);
 //Mover fondo
 garden = createSprite(640,300);
 garden.addImage(gardenImg);
 garden.scale = 2.55


 //crear sprite rabbit 
 rabbit = createSprite(160,700,20,20);
 rabbit.scale = 0.09;
 rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
   
  
 var select_sprites = Math.round(random(1,3));

 var select_sprites = Math.round(random(1,3));

 var select_sprites = Math.round(random(1,3));

 var select_sprites = Math.round(random(1,3));

  
 if (frameCount % 50 === 0) {
  if (select_sprites == 1) {
    createApples();
  } else if (select_sprites == 2) {
   createOrange();
  } else if (select_sprites ==3) {
   createRed();
 }
}

  if (frameCount % 60 === 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     } else if (select_sprites == 3){
       createRed();
     }
   }

   if (frameCount % 70 === 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     } else if (select_sprites == 3) {
       createRed();
     }
   }

   if (frameCount % 80 === 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     } else if (select_sprites == 3){
       createRed();
     }
   }

   drawSprites();
}

 


function createApples() {
 apple = createSprite(random(150, 1280),40, 10, 10);
 apple.addImage(appleImg);
 apple.scale = 0.1;
 apple.velocityY = 10;
 apple.lifetime = 150;
  
}

function createOrange() {
 orangeL = createSprite(random(150, 1280),40, 10, 10);
 orangeL.addImage(orangeImg);
 orangeL.scale = 0.09;
 orangeL.velocityY = 7;
 orangeL.lifetime = 150;
}

function createRed() { 
 redL = createSprite(random(150, 1280),40, 10, 10);
 redL.addImage(redImg);
 redL.scale = 0.09;
 redL.velocityY = 7;
 redL.lifetime = 150;
}

