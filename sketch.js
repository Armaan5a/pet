var dog,happydog,database
var foods,foodStock


function preload()
{
	dogi=loadImage("images/dogImg.png")
  hpdg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  
   database =firebase.database()

   dog = createSprite(400,400,100,100)
   dog.addImage(dogi)
   dog.scale=0.2
   
   foodStock=database.ref('food') 
   foodStock.on("value",stock)
}


function draw() {  
  
  textSize(20)
  fill(red)
  text("food remaining:"+foods,200,200)
  drawSprites();
}

function stock(data){
    foods=data.val()
}


