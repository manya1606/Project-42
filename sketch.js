hr = hour();
mn = minute();
sc = second();

var clockHand;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0)
  pop()
}