import Entity from "./Entity.js";
import Keyboard from "../lib/Keyboard.js";

class Player extends Entity {
  constructor(x, y, width, height, matrix) {
    super(x, y, width, height, matrix);
    this.speed = 8;
    // keyboard
    let d = new Keyboard(68);
    d.press = () => {
      this.vx = this.speed;
    };
    d.release = () => {
      this.vx = 0;
    };
    let s = new Keyboard(83);
    s.press = () => {
      this.vy = this.speed;
    };
    s.release = () => {
      this.vy = 0;
    };

    let a = new Keyboard(65);
    a.press = () => {
      this.vx = -this.speed;
    };
    a.release = () => {
      this.vx = 0;
    };
    let w = new Keyboard(87);
    w.press = () => {
      this.vy = -this.speed;
    };
    w.release = () => {
      this.vy = 0;
    };
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
export default Player;
