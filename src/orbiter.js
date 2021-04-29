import "./styles/global.css";

import { Stage } from "konva";
import Rocket from "./Rocket";

const stage = new Stage({
  container: "app",
  width: window.innerWidth,
  height: window.innerHeight,
});

const rocket = new Rocket();
stage.add(rocket);
