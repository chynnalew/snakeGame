import Phaser from '../lib/phaser.js';

export default class Snake {
  //create the snake scene
  constructor(scene) {
    this.scene = scene;
    //the snake body is an array that takes more boxes as dots are "consumed":
    this.body = [];
    //define the movement interval in milliseconds with lastMoveTime and moveInterval:
    this.lastMoveTime = 0;
    // how often does the snake move? in milliseconds: (in this case, move every .5 second, see update() for more)
    this.moveInterval = 500;
    // use this to set all widths and heights the same
    this.tileSize = 16;
    //create a vector that starts the body movement direction:
    this.direction = Phaser.Math.Vector2.RIGHT;
    // create the snake's head: left position, top position, height, width, hexDec color:
    //push the "head" box into the body array:
    this.body.push(this.scene.add.rectangle(this.scene.game.config.width/2, this.scene.game.config.height/2 , this.tileSize , this.tileSize , 0xCAEA7A).setOrigin(0)); 
    //add the food that will make the snake grow:
    this.food = this.scene.add.rectangle(0,0, this.tileSize, this.tileSize, 0xF9A1C6).setOrigin(0);
    //method to spawn the food in a random position:
    this.positionFood();
    //move the "head" of the body around with the arrow keys, e stands for event
    scene.input.keyboard.on('keydown', e => this.keydown(e));
  }

  positionFood() {
    //get a random number between zero and the game width/tileSize, in an int (Math.floor)
    this.food.x = Math.floor(Math.random() * this.scene.game.config.width / this.tileSize) * this.tileSize;
    this.food.y = Math.floor(Math.random() * this.scene.game.config.height / this.tileSize) * this.tileSize;
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
    // movement occurs if time passed is greater or equal to .5 second
    //this causes the "choppy" movement of the snake
    if(time >= this.lastMoveTime + this.moveInterval) {
      //reset the lastMoveTime time to the time movement last ocurred:
      this.lastMoveTime = time;
      //then move!
      this.move();
    }
  }

  move() {
    // define the x and y positions of the head so we can compare it to the food location
    let x = this.body[0].x + this.direction.x * this.tileSize;
    let y = this.body[0].y + this.direction.y * this.tileSize;
    // what happens when you "eat" the food (pass over the same x and y coordinates):
    if(this.food.x === x && this.food.y === y) {
      this.body.push(this.scene.add.rectangle(0, 0, this.tileSize , this.tileSize , 0xDDF0B9).setOrigin(0));
      this.positionFood();
    }
    //use a for loop to move each element of the body(starting at the last index, or the squares will stack), i=0 (the head on the lines following the loop) will move one point and all the other indexes will take the place of the index before them.
    for (let i = this.body.length-1; i>0; i--) {
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    //move the first element in the body array over time, this.direction -- change direction on keydown
    this.body[0].x = x;
    this.body[0].y = y;
    //kill the snake when it goes off the screen
    if (this.body[0].x < 0 || this.body[0].x >= this.scene.game.config.width || this.body[0].y < 0 || this.body[0].y >= this.scene.game.config.height) {
      this.scene.scene.restart();
    }
    //kill the snake if it eats its own tail
    for (let i=1; i<this.body.length ; i++) {
      if (this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y) {
        this.scene.scene.restart();
      }
    }
  }
}