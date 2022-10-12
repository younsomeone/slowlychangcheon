let socket = io();

let myButton;
let myButton2;
let myInput;
let myText;
let stuff;
let bgColor;

let buttonX;
let buttonY;
let buttonRadius;
let buttonH;



function setup() {
  createCanvas(windowWidth, windowHeight);
  init();
  background(240);
    myInput = createInput();
    // position the input
    myInput.position(20, 20);

    myInput.size(300,80);
    myInput.style('font-size', '41px');
    // position the button

    // what is the callback for the button?

    myText = '';
    stuff='';
}

//초기화 함수
function init(){
  buttonX = width * 0.5;
  buttonY = height * 0.5 - 100;
  buttonRadius = 50;
  buttonH = 15;
}

function draw() {
  background(244);
  button();
}

function button(){
    //올라간 높이
  let up = 15;
  if(dist(mouseX,mouseY,buttonX,buttonY-buttonH)<buttonRadius){
     up=10;
      if (mouseIsPressed){
      up=2;
      doSomething1()
     }
    
    }
          
  buttonH = lerp(buttonH,up,0.5)
  
  noStroke();
  //맨 아래
  fill(120);
  ellipse(buttonX,buttonY,buttonRadius*2,buttonRadius*2);
  //위
  fill(220)
  ellipse(buttonX,buttonY-buttonH,buttonRadius*2,buttonRadius*2);
  //맨위
  fill("white");
  ellipse(buttonX,buttonY-buttonH,buttonRadius*2-15,buttonRadius*2-15);
}

function mouseIsPressed(){
  
}

function doSomething1() {
socket.emit("value", myInput.value());
}

function doSomething2() {
  socket.emit("value", myInput.value());
}
