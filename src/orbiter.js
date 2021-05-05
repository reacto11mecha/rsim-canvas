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

document.addEventListener("keydown", handleKeyInput);
document.addEventListener("keyup", handleKeyInput);

function handleKeyInput({ keyCode, type }) {
  const isKeyDown = type === "keydown" ? true : false;

  if (keyCode === 37) rocket.rotatingLeft = isKeyDown;
  if (keyCode === 39) rocket.rotatingRight = isKeyDown;
  if (keyCode === 38) rocket.engineOn = isKeyDown;
}

const anim = new Animation(() => {
  rocket.move();
  rocket.drawRocket();
}, GameStage);
anim.start();
