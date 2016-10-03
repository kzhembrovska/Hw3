function setup() {
  createCanvas(300,300);
  background(255);

  for(var i=0; i<150; i=i+10){
        line(150-i, 10+i, 150+i, i+10)
  }
  for(var k=0; k<300; k=k+10){
        line(k, 150+k, 300-k,150+k)
  }
}

//line(150,0,150,0);
//line(140,10,160,10);
//line(130,20,170,20);
//line(120,30,180,30);
