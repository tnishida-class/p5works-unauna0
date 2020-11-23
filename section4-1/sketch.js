// テキスト「リサイズするプログラムを作る」
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < 5; i++){
    ellipse(width * i / 10, height * (10 - 1) / 10, 20);
  }
  text("center!", width * 0.1, height * 0.5);
}
