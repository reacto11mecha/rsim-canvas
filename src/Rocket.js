import { Layer, Rect, RegularPolygon } from "konva";

export default class Rocket extends Layer {
  constructor() {
    super();

    this.fuel = new Rect({
      height: 300,
      width: 100,
      fill: "green",
      stroke: "black",
      strokeWidth: 4,
    });
    this.triangle = new RegularPolygon({
      x: this.fuel.width() / 2,
      y: this.fuel.height(),
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
