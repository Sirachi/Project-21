
class Ball{
    constructor(x, y, r) {
        var ball_options = {
            isStatic: false,
            restitution: false,
            friction: 0,
            density: 1.2
        }
    
        this.r = r;
        this.ball = Bodies.circle(x, y, r, ball_options);
        World.add(myWorld, this.ball);
    }
  
    display() {
      ellipseMode(CENTER)
      ellipse(this.ball.position.x,this.ball.position.y, this.r);
    }
  }
  