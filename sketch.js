'use strict';

function setup() {
  createCanvas(windowWidth, windowHeight * .8);
  noFill();
  background(255);
  strokeWeight(2);
  stroke(0, 25);
}

function draw() {
  if(mouseIsPressed){
    push();
    translate(width/2,height/2);

    var circleResolution = int(map(mouseY+100,0,height,2, 10));
    var radius = mouseX-width/2 + 0.5;
    var angle = TWO_PI/circleResolution;

    beginShape();
    for (var i=0; i<=circleResolution; i++){
      var x = 0 + cos(angle*i) * radius;
      var y = 0 + sin(angle*i) * radius;
      vertex(x, y);
    }
    endShape();
    pop();
  }
}

function keyReleased(){
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key== 'S') saveCanvas(gd.timestamp(), 'png');
}

