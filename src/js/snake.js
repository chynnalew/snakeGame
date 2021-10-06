export default class Snake {
  constructor(scene) {
    this.scene = scene;
    //left, top, height, width, hexDec color
    this.box = this.scene.add.rectangle(0,0,16,16,0xff0000).setOrigin(0);
  }

  update(time) {
    this.box.x += 1;
    
  }
}