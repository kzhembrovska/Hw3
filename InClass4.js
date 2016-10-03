function setup() {
  createCanvas(300,300);
  background(255);
}

function draw() {
  noFill();
  stroke(8);
  for(var i=150; i>0 && i<150; i=i-10){
    for(var s=10; s>0 && s<150; s=s+10 ){
      for(var n=150; n>150 && n<300; n=n+10){
        line(i, s, n, s);
      }
      }
      }
  for(var k=0; k>0 && k<150; k=k+10){
    for(var z=150; z>150 && z<300; z=z+10 ){
      for(var b=300; b>150 && b<300; b=b-10){
        line(k, z, b, z);
      }
      }
      }
  }
//line(150,0,150,0);
//line(140,10,160,10);
//line(130,20,170,20);
//line(120,30,180,30);
