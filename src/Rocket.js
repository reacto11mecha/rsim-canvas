import { Layer, Rect, RegularPolygon } from "konva";

const degToRad = Math.PI / 180;
const GRAVITY = 0;
const THRUST = 55;

export default class Rocket extends Layer {
  constructor(stage) {
    super();

    this.size = {
      width: stage.width(),
      height: stage.height(),
    };

    const INITIAL_X = (1 / 35) * stage.width();
    const INITIAL_Y = (1 / 2) * stage.height();

    this.angle = 0;
    this.engineOn = false;
    this.rotatingLeft = false;
    this.rotatingRight = false;
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.fuel = new Rect({
      x: INITIAL_X,
      y: INITIAL_Y,
      height: 300,
      width: 100,
      fill: "green",
      stroke: "black",
      strokeWidth: 4,
    });
    this.triangle = new RegularPolygon({
      x: this.fuel.x() + this.fuel.width() / 2,
      y: this.fuel.y() + this.fuel.height(),
      sides: 3,
      radius: 45,
      fill: "#00D2FF",
      stroke: "black",
      strokeWidth: 4,
    });

    this.add(this.triangle);
    this.add(this.fuel);
    this.draw();
  }

  move() {
    if (this.rotatingLeft) this.angle -= degToRad * 0.9;
    if (this.rotatingRight) this.angle += degToRad * 0.9;

    if (this.engineOn) {
      this.velocity.x += (THRUST / 100) * Math.sin(this.angle);
      this.velocity.y -= (THRUST / 100) * Math.cos(this.angle);
    }

    this.velocity.y += GRAVITY / 100;
  }

  drawRocket() {
    this.fuel.x(this.fuel.x() + this.velocity.x);
    this.fuel.y(this.fuel.y() + this.velocity.y);

    this.fuel.x((this.size.width + this.fuel.x()) % this.size.width);
    this.fuel.y((this.size.height + this.fuel.y()) % this.size.height);

    this.fuel.rotate(this.angle);

    this.triangle.x(this.fuel.x() + this.fuel.width() / 2);
    this.triangle.y(this.fuel.y() + this.fuel.height());

    this.triangle.rotate(this.angle);
  }
}
