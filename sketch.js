
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  dog = loadImage(dogImg);
}

function setup() {
	createCanvas(500, 500);
  dog = new dog(450,500,350,550);
  dog.display();
  foodStock=database.ref('Food');
    foodStock.on("value",readstock);
}


function draw() {  

  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  text("Note: Press the Up arrow to Feed the Dog Milk and make it happy!!", 250,100);

  drawSprites();
 
  textSize(5);
  fill("white");

}



