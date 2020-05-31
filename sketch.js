var database;
var gameState = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

 
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}


