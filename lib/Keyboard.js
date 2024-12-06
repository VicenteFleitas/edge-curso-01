export default class Keyboard {
  constructor(keyCode) {
    this.keyCode = keyCode;
    // vars
    this.down = false;
    this.up = true;
    this.press = undefined;
    this.release = undefined;
    // listeners
    window.addEventListener("keydown", this.onDown.bind(this));
    window.addEventListener("keyup", this.onUp.bind(this));
  }
  onDown(e) {
    if (e.keyCode === this.keyCode) {
      if (!this.down && this.press) this.press();
      this.down = true;
      this.up = false;
    }
    e.preventDefault();
  }
  onUp(e) {
    if (e.keyCode === this.keyCode) {
      if (!this.up && this.release) this.release();
      this.down = false;
      this.up = true;
    }
    e.preventDefault();
  }
}
