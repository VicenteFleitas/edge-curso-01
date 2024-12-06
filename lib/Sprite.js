class Sprite {
  constructor(x, y, width, height, color = "#ffffff") {
    Object.assign(this, { x, y, width, height, color });
    // vars
    this.vx = 0;
    this.vy = 0;
    this.children = [];
    this.parent = undefined;
    this._layer = 0; // parent.children index
  }
  get layer() {
    return this._layer;
  }
  set layer(value) {
    this._layer = value;
    if (this.parent) this.parent.children.sort((a, b) => a.layer - b.layer);
  }
  get gx() {
    if (this.parent) {
      return this.parent.x + this.x;
    } else {
      return this.x;
    }
  }
  get gy() {
    if (this.parent) {
      return this.parent.y + this.y;
    } else {
      return this.y;
    }
  }
  get halfWidth() {
    return this.width / 2;
  }
  get halfHeight() {
    return this.height / 2;
  }
  get centerX() {
    return this.x + this.halfWidth;
  }
  get centerY() {
    return this.y + this.halfHeight;
  }
  addChild(sprite) {
    if (sprite.parent) sprite.parent.removeChild(sprite);
    sprite.parent = this;
    this.children.push(sprite);
    sprite._layer = this.children.length;
  }
  removeChild(sprite) {
    let spriteIndex = this.children.indexOf(sprite);
    this.children.splice(spriteIndex, 1);
    sprite.parent = undefined;
  }
  render(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(this.gx, this.gy, this.width, this.height);
    ctx.fill();
    if (this.children.length > 0) {
      this.children.forEach((child) => {
        child.render(ctx);
      });
    }
    ctx.restore();
  }
}
export default Sprite;
