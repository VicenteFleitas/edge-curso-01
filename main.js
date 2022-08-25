import Stage from "./lib/Stage.js";
import Sprite from "./lib/Sprite.js";
import Entity from "./game/Entity.js";
import Player from "./game/Player.js";
import { hitTestRectangle, sorting, loadJson, colorsDB } from "./lib/utils.js";

loadJson("../assets.json", init);

function init(data) {
  let stage = new Stage(0, 0, 512, 512, colorsDB[0]);
  let collisionTiles = [];
  let sortArray = [];
  let tw = 64;
  let player;
  let box1;
  data.map.forEach((row, y) => {
    row.forEach((col, x) => {
      if (col === 1) {
        let tile = new Entity(x * tw, y * tw, tw, tw, data.tile);
        stage.addChild(tile);
        collisionTiles.push(tile);
      } else if (col === 2) {
        box1 = new Entity(x * tw, y * tw, tw, tw, data.chair);
        stage.addChild(box1);
        sortArray.push(box1);
      } else if (col === 3) {
        player = new Player(x * tw, y * tw, tw, tw, data.player);
        stage.addChild(player);
        sortArray.push(player);
      }
    });
  });

  loop();
  function loop() {
    requestAnimationFrame(loop);
    // logic
    player.update();
    // collision
    collisionTiles.forEach((tile) => {
      let hit = hitTestRectangle(player, tile);
      if (hit) {
        player.x -= player.vx;
        player.y -= player.vy;
      }
    });
    // depth sorting
    sorting(sortArray);
    // render
    stage.render();
  }
}
