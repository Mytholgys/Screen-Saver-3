//Circle One
var circleX = 200
var circleY = 300
var circleD = 20

//Circle Two
var circleX2 = 1800
var circleY2 = 700
var circleD2 = 20

//All Efect
function setup() {
  frameRate (200)
  createCanvas (windowWidth,windowHeight)
  background (55, 119, 66)
  
}

function draw() {
  noStroke ()
  fill (random(), random(), random(255), random(255))
  
  //Circle One
  ellipse (circleX, circleY, circleD)
  
  circleX = circleX + random(-10,10)
  circleY = circleY + random(-10,10)
  circleD = circleD + random(-5,5)
  
  if (circleX>windowWidth) {
    circleX = circleX - 10
  }
  
  if (circleY>windowHeight) {
    circleY = circleY - 10
  }
  
  if (circleX<0) {
    circleX = circleX + 10
  }
  
  if (circleY<0) {
    circleY = circleY + 10
  }
  
  //circle TOWO
  ellipse (circleX2, circleY2, circleD2)
  
  circleX2 = circleX2 + random(-10,10)
  circleY2 = circleY2 + random(-10,10)
  circleD2 = circleD2 + random(-5,5)
  
  if (circleX2>1920) {
    circleX2 = circleX2 - 10
  }
  
  if (circleY2>1080) {
    circleY2 = circleY2 - 10
  }
  
  if (circleX2<0) {
    circleX = circleX2 + 10
  }
  
  if (circleY2<0) {
    circleY2 = circleY2 + 10
  }
}
