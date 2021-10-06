import Snake from './snake.js';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    //add the snake to the game
    this.snake = new Snake(this);
  }

  update(time) {
    //update the snake body and movement over time
    this.snake.update(time);
  }
}
