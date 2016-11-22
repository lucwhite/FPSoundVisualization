var colorCount = 0;
var speed;
var value = 4;

function setup() {
  createCanvas(800, 800);
  noFill(0);
  stroke(60);
  strokeWeight(0.5);

}

function draw() {
  background(255);
  duplicate();

}

function duplicate() {
  var size = 40;
  var count = 20;
  translate(50, 50);

  for (var x = 0; x < count; x++) {
    for (var y = 0; y < count; y++) {
      push();
      translate(x * size / 1.5, y * size / 1.5);

      //ellipse(0, 0, size, size);
      //strokeWeight(4);
      var v = int(255 * colorCount / 400.0)
      if (value == 0) rotate(-(frameCount * 0.02 + x / 2 + y / 2));
      if (value == 1) rotate(-(frameCount * 0.04 + x / 2 + y / 2));
      if (value == 2) rotate(-(frameCount * 0.06 + x / 2 + y / 2));
      if (value == 3) rotate(-(frameCount * 0.08 + x / 2 + y / 2));
      if (value == 4) rotate(-(frameCount * 0.1 + x / 2 + y / 2));
      if (value == 5) rotate(-(frameCount * 0.2 + x / 2 + y / 2));
      if (value == 6) rotate(-(frameCount * 0.36 + x / 2 + y / 2));
      if (value == 7) rotate(-(frameCount * 0.5 + x / 2 + y / 2));
      stroke(v, 25, 250);
      fill(v, 25, 250);
      ellipse((size / 3), (size / 3), 5, 5);

      colorCount++;
      pop();



    }
  }
  colorCount = 0;
}

function keyTyped() {
  if (key === 'a') {
    value = 0;
  } else if (key === 's') {
    value = 1;
  } else if (key === 'd') {
    value = 2;
  } else if (key === 'f') {
    value = 3;
  } else if (key === 'g') {
    value = 4;
  } else if (key === 'h') {
    value = 5;
  } else if (key === 'j') {
    value = 6;
  } else if (key === 'k') {
    value = 7;
  }
  // uncomment to prevent any default behavior
  // return false;
}