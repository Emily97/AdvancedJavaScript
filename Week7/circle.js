function Circle(x = 50, y = 50, r = 100, col = '#f00') {
  this.x = x;
  this.y = y;
  this.r = r;
  this.col = col;
  this.vx = random(-5,5);
  this.vy = random(-5,5);
}

Circle.prototype.move = function() {
  this.x += this.vx;
  this.y += this.vy;
};

Circle.prototype.draw = function() {
  fill(this.col);
  ellipse(this.x,this.y,this.r);
};

function BouncingCircle(x = 50, y = 50, r = 50, col = '#0f0') {
  // call the parent constructor
  Circle.call(this, x, y, r, col);
  this.vx = random(-5,5);
  this.vy = random(-5,5);
}

// Inherit from Circle
BouncingCircle.prototype = Object.create(Circle.prototype);
BouncingCircle.prototype.constructor = Circle;

BouncingCircle.prototype.move = function() {
  this.x += this.vx;
  this.y += this.vy;
  if (this.x > width || this.x < 0) {
    this.vx *= -1;
  }
  if (this.y > height || this.y < 0) {
    this.vy *= -1;
  }
};
