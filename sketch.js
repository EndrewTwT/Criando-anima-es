let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(900, 900);
   background(color(100,500,500));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 400;
  posicaoVertical = 400;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,100);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,455), random(0,455), random(0,455), random(0,300));
  }
   
}