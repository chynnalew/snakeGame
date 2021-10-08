import Phaser from '../lib/phaser.js';
import Snake from './snake.js';

//set global variables

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
    //add the snake to the game
    this.snake = new Snake(this);
    //start music for the scene (loaded in the titleScreen)
    this.sound.play('music', {
      loop:true,
      volume:0.3
    })
    }
    
    update(time) {
    //set the timer to interval loop:
    this.time.addEvent({
      delay: 10000, 
      callback: timerEvent(), //scope this globally
      loop: true
    });
    //update the snake body and movement over time
    this.snake.update(time);
    // update the score text when the score increments up
    scoreText.setText('score: ' + this.snake.score);
    // this.snake.dead is set to false, but changes to true in the snake constructor when the player dies
    if(this.snake.dead) {
      // if dead, run the game over method
      this.gameOver();
    }
  }

  gameOver() {
    //add game over text
    this.add.text(200,200,'GAME OVER', {fontSize: '50px', fill: '#ffffff' });
    this.add.text(195, 260, 'refresh the page to play again');
    //stop the timer
    this.time.destroy();
    //stop the snake
    this.snake.body.visible = false;
    //stop the music when you die
    this.sound.stopAll();
  }

}

//create a function that fires with the timed interval:
function timerEvent() {
  timer += 1;
  if(timer % 100 === 0){
    timerText.setText('timer: ' + timer/100);
  }
}
