var hypnoticBall, database;
var position;
var hypnoticBall1;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";

  hypnoticBall1 = createSprite(200,300,10,10);
  hypnoticBall1.shapeColor = "green";

  var hypnoticBallPosition1 = database.ref('ball1/position');
  hypnoticBallPosition1.on("value", readPosition, showError);

  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('ball1/position').set({
'x':position.x+x,'y':position.y+y
  })
}
function writePosition(x,y){
  database.ref('ball/position').set({
'x':position.x+x,'y':position.y+y
  })
}
function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error al escribir en la base de datos");
}
