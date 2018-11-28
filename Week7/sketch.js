let circles = [];

function setup() {
  createCanvas(400,400);
  background(0);
}

function draw() {
  background(0);
  for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].draw();
  }
}

function mousePressed() {
  circles.push( new Circle(mouseX, mouseY) );
  circles.push( new BouncingCircle(mouseX, mouseY) );
}
