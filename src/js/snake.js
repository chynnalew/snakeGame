export default class Snake {
  constructor(scene) {
    this.scene = scene;
    //create a vector that starts the body movement direction:
    this.direction = Phaser.Math.Vector2.RIGHT;
    //the snake body is an array that takes more boxes as dots are "consumed":
    this.body = [];
    // create the box: left, top, height, width, hexDec color, push the "head" box into the body array:
    this.body.push(this.scene.add.rectangle(0,0,16,16,0xff0000).setOrigin(0));
    // add a second box to the body
    this.body.push(this.scene.add.rectangle(0,0,16,16,0x0000ff).setOrigin(0));
    //move the "head" of the body around with the arrow keys, e stands for event
    scene.input.keyboard.on('keydown', e => {this.keydown(e);
    });
  }

  keydown(event) {
    //used to see what the "keyCode" (case) numbers are when you press the arrow keys
    console.log(event);
    //used to change direction of "snake" with each keydown
    switch(event.keyCode) {
      case 37: //left arrow
        this.direction = Phaser.Math.Vector2.LEFT;
        break;
      case 38: //up arrow
        this.direction = Phaser.Math.Vector2.UP;
        break;
      case 39: //right arrow
        this.direction = Phaser.Math.Vector2.RIGHT;
        break;
      case 40: //down arrow
        this.direction = Phaser.Math.Vector2.DOWN;
        break;
    }
  }

  update(time) {
    //move the first element in the body array over time, this.direction -- change direction on keydown
    this.body[0].x += this.direction.x;
    this.body[0].y += this.direction.y;

  }
}