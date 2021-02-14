var database;
var gameState=0
var playerCount=0
var form, player,game

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game= new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  
    
  
}

function writePosition(x,y){
  /*database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })*/
}

function readPosition(data){
  position = data.val();
  
}

function showError(){
  console.log("Error in writing to the database");
}
