var fireworks = [];
var gravity;

function setup(){
  createCanvas(1350,658);
  colorMode(HSB);
  stroke(255);
  strokeWeight(4);
  background(0);
  gravity = createVector(0, 0.3);
  ///firework = new Particle(random(width), height);
}

function draw(){
  colorMode(RGB);
  background(0, 0, 0, 51);
  /*firework.update();
  firework.show();
  firework.applyForce(gravity);*/
  if (random(1)<0.04){
  fireworks.push(new Firework());
}
  for (var i = fireworks.length-1 ; i >= 0 ; --i) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  } console.log(fireworks.length);
}
