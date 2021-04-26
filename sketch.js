//Create variables here
var  dog,dimg, happyDog, database, foods, foodStock
function preload()
{
	//load images here
  happyDog=loadImage("images/happydog.png");
  dimg=loadImage("images/Dog.png");

}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);

  foodStock=database.ref("food");
  foodStock.on("value",readstock);
  dog=createSprite(250,250,10,10);
  dog.scale=0.3
  dog.addImage(dimg);


  
}


function draw() {  
  background("black")
  
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  textSize(20);
  fill ("yellow");
text("Press Up Arrow key to feed Drago milk",50,50)
}
function writeStock(){

}
function readstock(){

}


