var ball;

var database,position;
var count

function setup(){
    createCanvas(500,500);
    database=firebase.database();


    ball = createSprite(10,10,10,10);
    ball.shapeColor = "red";

    var ballref=database.ref("ball/position")
ballref.on("value",readPosition)

var scoreref=database.ref("score")
scoreref.on("value",readScore)

}

function draw(){
    background("white");
    text("score:"+count,200,100);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        count++
        changeCount(count)
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
console.log(data.val())

position=data.val()
ball.x=position.x;
ball.y=position.y;
}

function readScore(data){
 count= data.val()
}
function changeCount(count){
database.ref("/").update({
    score:count
})
}

function changePosition(x,y){
  database.ref("ball/position").update({
      x:position.x+x,
      y:position.y+y
  })
}
