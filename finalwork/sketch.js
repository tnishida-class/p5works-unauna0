let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}

function draw(){
  background(160, 192, 255);
  sakana(x, y, 100);
  // 速度＝位置の増分
  x += vx;
  y += vy;

  // 跳ね返り
  if(x < 0 || x > width){ vx = -1 * vx; } // 横
  if(y < 0 || y > height){ vy = -1 * vy; } // 縦

  // x座標, y座標を画面内にする
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function sakana(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 7 / 10 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
