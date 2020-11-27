var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballRef=database.ref('Ball/position');
    ballRef.on("value",readPosition);
    
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,5);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })


   
}
function readPosition(data){
    position=data.val();
    ball.x=position.x
    ball.y=position.y



}
