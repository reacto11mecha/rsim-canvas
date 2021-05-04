import { Layer, Rect, RegularPolygon } from "konva";

export default class Rocket extends Layer {
  constructor(stage) {
    super();

    const INITIAL_X = (1 / 35) * stage.width();
    const INITIAL_Y = (1 / 2) * stage.height();

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
}
