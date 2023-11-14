class Vector2 {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
// Mouse In Window
var mouse = {
    x: undefined,
    y: undefined,
    radius:50
}

window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
)

class Circle{
    constructor(posX, posY, moveXSpeed, moveYSpeed, radius, maxRadius, minRadius){
        this.posX = posX;
        this.posY = posY;
        this.moveXSpeed = moveXSpeed;
        this.moveYSpeed = moveYSpeed;
        this.radius = radius;
        this.maxRadius = maxRadius;
        this.minRadius = minRadius;

    }

    Draw(){
        _canvas.beginPath();// !!! extension line 
        _canvas.arc(this.posX,this.posY,this.radius,0,Math.PI*2,false);
        _canvas.strokeStyle = "blue";
        _canvas.stroke();
        _canvas.fill();
    }

    CheckCollider(){
        if(this.posX + this.radius > innerWidth|| this.posX - this.radius < 0){
            this.moveXSpeed = -this.moveXSpeed;
        }
        if(this.posY + this.radius > innerHeight|| this.posY - this.radius < 0){
            this.moveYSpeed = -this.moveYSpeed;
        }

    }

    UpdatePosition(){
        this.posX += this.moveXSpeed;
        this.posY += this.moveYSpeed;
    }

    CheckMousePosAndScaleCircle(){
        if(this.radius >= this.maxRadius){
            return;
        }

        if(mouse.x - this.posX < mouse.radius 
        && mouse.x -this.posX > -mouse.radius
        && mouse.y -this.posY < mouse.radius
        && mouse.y -this.posY > -mouse.radius
            ){
            this.radius +=1;
        } else if(this.radius > this.minRadius){
            this.radius -=1;
        }
    }

    Update(){
        this.Draw();
        this.CheckCollider();
        this.CheckMousePosAndScaleCircle();
        this.UpdatePosition();
    }
}
var canvas = document.querySelector('canvas');
canvas.height = innerHeight;
canvas.width = innerWidth;
var _anmPosX = 200;
var _canvas = canvas.getContext('2d')
var _circleRadius = 30;
var _circleMoveSpeedVect2 = new Vector2(2,8);
var _circlePosVect2 = new Vector2(200,30);
// var _circleMoveSpeedVect2 = {x : 2,y : 3};
// var _circlePosVect2 = {x : 200,y : 30};
// console.log(canvas)


//line 
// _canvas.beginPath();
// _canvas.moveTo(50,300);
// _canvas.lineTo(300,100);
// _canvas.lineTo(400,300);
// _canvas.strokeStyle = "#fa34a3";
// _canvas.stroke(); 

// circle
// _canvas.beginPath();// !!! extension line 
// _canvas.arc(300,300,30,0,Math.PI*2,false);
// _canvas.strokeStyle = "blue";
// _canvas.stroke();

function DrawACircleRandomly(){
    var xPos = Math.random()*window.innerWidth;
    var yPos = Math.random()*window.innerHeight;
    _canvas.beginPath();// !!! extension line 
    _canvas.arc(xPos,yPos,30,0,Math.PI*2,false);
    _canvas.strokeStyle = "blue";
    _canvas.stroke();
}

//Awake
var _circleList = [];
for(var i = 0;i < 100; i++){
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    _circleList.push(new Circle(x,y,dx,dy,5,30,5));
}

function Update(){
    requestAnimationFrame(Update);
    _canvas.clearRect(0,0,innerWidth,innerHeight);
    var cirLenght = _circleList.length;
    for(var i=0;i< cirLenght;i++){
        _circleList[i].Update();
    }
}

Update();



//PROBLEM IN CURRENT 
    //No component ??
    //Anm have no begin/ endtime, time per frame


//JS LEARNING
//let vs var
// clear rect can co pos va size phu hop

// render html
// array, list, radom, grid on html
// 
//particle system by canvas


// anm in game -> tao nhieu effect cho game, onMouseOn, onClick 
// trong javascript có vẻ người ta chuộn tạo ra 1 luong san co, tai su dung chu ko the xoa chung di

// Thiếu LOD
// Pooling 
// OOP
// OnEnable/ Update/ FixUpdate/ OnTriggerEnter

// Javascript -> html, trong tuần thì xong game trúc xanh (game lật hình)
// DOm ? -> canvas
// Style, to chic code

// Code on mouse

// // array -> create(int wide, int high){ if(%2), max square
// 		-> create(int wideXwide);
// }

// // state : 
// 	start, exit 
// 	stage 2x3, stage6x6, stage10x10,back, highScrore
// 	gameplay, mute/TurnOnSound, mute/TurnOnMusic, Score , back=(confirm, exit)


// 		gameplay state (nothing, check1, check2, compare -> reset or nothing)