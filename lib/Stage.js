import Sprite from "./Sprite.js";

class Stage extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    // create canvas
    this.canvas = document.createElement("canvas");
    this.canvas.style.background = this.color;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
  }
  render() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.children.forEach((sprite) => {
      sprite.render(this.ctx);
    });
  }
}
export default Stage;
