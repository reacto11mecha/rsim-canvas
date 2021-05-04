import "./styles/global.css";

import { Stage, Animation } from "konva";
import Rocket from "./Rocket";

const GameStage = new Stage({
  container: "app",
  width: window.innerWidth,
  height: window.innerHeight,
});

const rocket = new Rocket(GameStage);
GameStage.add(rocket);

const anim = new Animation((frame) => {
  const time = frame.time;
  const timeDiff = frame.timeDiff;
  const frameRate = frame.frameRate;

  console.log(frameRate);
}, GameStage);

anim.start();
