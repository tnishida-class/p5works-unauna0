

function setup(){
  createCanvas(200, 200);
  background(192);
for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    ellipse(x, y, 10);
    star(x, y, 10)
  }
}

  function star(cx, cy, r){
    beginShape();    // 点つなぎを始める
    for(let i = 0; i < 5; i++){
      const theta = TWO_PI * i * 2 / 5 - HALF_PI;
      const x = cx + cos(theta) * r;
      const y = cy + sin(theta) * r;
      vertex(x, y);  // 次につなぐ点を１つ増やす
    }
    endShape(CLOSE); // 点つなぎを終わる
  }
