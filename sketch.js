var canvas, database;
var gamestate = 0;
var playerCount;
var form,player,game;
function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);

}

function draw(){
  background("white");
  
    drawSprites();
  
}

