function setup() {
  createCanvas(200, 200);
  background(200);
}

function draw() {
   noFill();
  stroke(10);
  for(var i=8; i>0 && i<190; i=i+10) {
    line(100, 10, i, 190);
  }
}
