import Phaser from '../lib/phaser.js';
import Snake from './snake.js';

//set global variables
let interval;
let timer = 0;
let timerText = '';
let scoreText = '';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    //add the score text to the game:
    scoreText = this.add.text(10, 30, 'score: 0', {fill: '#808080'});
    //add the timer to the game:
    timerText = this.add.text(10, 10, 'timer: 0', {fill: '#808080'});
    //set the timer to interval up every second:
    interval = setInterval(function(){
      timer += 1;
      timerText.setText('timer: ' + timer);
    }, 1000);
    //add the snake to the game
    this.snake = new Snake(this);
  }
  
  update(time) {
    //update the snake body and movement over time
    this.snake.update(time);
    // update the score text when the score increments up
    scoreText.setText('score: ' + this.snake.score);
  }
}
