function setup() {
  createCanvas(400,200);
  background(255);
}

function draw() {
   noFill();
  stroke(10);
  for(var i=1; i>0 && i<300; i=i+6) {
   line(i, 0, i, i+6);
  }
}
