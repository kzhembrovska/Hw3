function setup() {
  createCanvas(200, 200);
  background(255);
}

function draw() {
   noFill();
  stroke(10);
  for(var i=10; i>0 && i<190; i=i+10) {
    ellipse(100, 100, i, i);
  }
}
