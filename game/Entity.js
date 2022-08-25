import Sprite from "../lib/Sprite.js";
import { colorsDB } from "../lib/utils.js";

class Entity extends Sprite {
  // @type: "tile, item, object, npc, player, enemy, block"
  constructor(x, y, width, height, matrix) {
    super(x, y, width, height);
    this.matrix = matrix;
    this.pixels = 8;
  }
  render(ctx) {
    // self render
    this.matrix.forEach((colorId, i) => {
      // if colorId is -1 is a empty pixel
      if (colorId !== -1) {
        let x = i % this.pixels,
          y = Math.floor(i / this.pixels);
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = colorsDB[colorId];
        ctx.rect(
          this.gx + (x * this.width) / this.pixels,
          this.gy + (y * this.width) / this.pixels,
          this.width / this.pixels,
          this.width / this.pixels
        );
        ctx.fill();
        ctx.restore();
      }
    });

    // render childs
    if (this.children.length > 0) {
      this.children.forEach((child) => {
        child.render(ctx);
      });
    }
  }
}
export default Entity;
