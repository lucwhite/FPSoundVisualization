var colorCount = 0;
var speed;
var value = 4;

var osc, fft;

var kick;
var snare;

var once;

var speed;

function preload() {
  //load sounds
  kick = loadSound('assets/808K01 Drums1DOTcom.wav');
  snare = loadSound('assets/Snare12 Drums1DOTcom.wav');
}

function setup() {
  createCanvas(600, 600);
  noFill(0);
  stroke(60);
  strokeWeight(0.5);

  soundFormats('wav'); //includes audio file types

  
  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(.5); //set amplitude

  fft = new p5.FFT();
  osc.start();

}

function draw() {

  background(255);
  duplicate(speed);
  colorCount= random(0,255);

  if (value === 0) {
    var freq = 261.63;
    

  }
  //keys & percussion instruments
  if (value == 1){ freq = 293.66;}
  if (value == 2){ freq = 329.63;}
  if (value == 3){ freq = 349.23;}
  if (value == 4) { freq = 392.00; }
  if (value == 5){ freq = 440.00;}
  if (value == 6){ freq = 493.88;}
  if (value == 7){ freq = 523.25;}
  if (value == 8){ kick.play();}
  if (value == 9){ snare.play();}


  osc.freq(freq);
  
  //amplitude is mapped to verticle location of mouse
  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
  
  //speed of play for the kick and snare mapped to horizontal location
  speed = map(mouseX, 0.1, width, 0, 2);
  speed = constrain(speed, 0.01, 4);
  snare.rate(speed);
  snare.amp(amp/2);
  kick.rate(speed);
  kick.amp(amp/2);
  

}

function duplicate() {
  //draws squares and makes them rotate in circles
  var size = 40;
  var count = 20;
  translate(50, 50);

  for (var x = 0; x < count; x++) {
    for (var y = 0; y < count; y++) {
      push();
      translate(x * size / 1.5, y * size / 1.5);

      //stroke(255,0,0);
      //ellipse(0, 0, size, size);
      //strokeWeight(4);
      var v = int(255 * colorCount / 400.0)
      
      //movements corresponding to which key is pressed slow to fast
      if (value === 0) translate(-(frameCount % 15 + x % 2 + y % 2), (frameCount % 15 + x % 2 + y % 2));
      if (value == 1) rotate(-(frameCount * 0.04 + x / 2 + y / 2));
      if (value == 2) rotate(-(frameCount * 0.06 + x / 2 + y / 2));
      if (value == 3) rotate(-(frameCount * 0.08 + x / 2 + y / 2));
      if (value == 4) rotate(-(frameCount * 0.1 + x / 2 + y / 2));
      if (value == 5) rotate(-(frameCount * 0.2 + x / 2 + y / 2));
      if (value == 6) rotate(-(frameCount * 0.36 + x / 2 + y / 2));
      if (value == 7) rotate(-(frameCount * 0.5 + x / 2 + y / 2));
      if (value == 8) rotate(-(frameCount * speed + x / 2 + y / 2));
      if (value == 9) rotate(-(frameCount * speed + x / 2 + y / 2));
      stroke(v, 25, 250);
      fill(v, 25, 250);
      rect((size / 3), (size / 3), 10, 10);

      colorCount++;
      pop();



    }
  }
  colorCount = 0;
}

function mousePressed() {
  //plays percussion if mouse is clicked
  if (mouseX > (width / 2)) {
  kick.play();
  } else {
  snare.play();
  }
}

function keyTyped() {
  //saves latest pressed key
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
  } else if (key === 'o') {
    value = 8;
  } else if (key === 'p') {
    value = 9;
  } else if (key === 'q') {
    value = 10;
  } else if (key === 'w') {
    value = 11;
  } else if (key === 'e') {
    value = 12;
  } 
  // uncomment to prevent any default behavior
  // return false;
  
}

function keyReleased(){
  value = 10;
}

