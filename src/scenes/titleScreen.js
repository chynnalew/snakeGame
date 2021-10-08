import Phaser from '../lib/phaser.js';
import MainScene from './mainScene.js';

export default class TitleScreen extends Phaser.Scene {
  constructor () {
    super('TitleScreen');
  }
  

  preload() {
    //load in spritesheet(reference name, location, {height, width})
    this.load.spritesheet('snake', 'assets/snakeSpritesheetCalciumtrice.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.audio('music', 'assets/BlazerRail.wav')
  }

  create () {
    //add title text (width, height, text, text style)
    this.add.text(this.game.renderer.width/3, this.cameras.main.height/4, 'SNAKE GAME', {fontSize: '35px'}).setOrigin(0);
    this.add.text (200,300, 'use the arrow keys to move');
    this.add.text (217,330, "don't go off the edge");
    this.add.text (231,360, "don't eat yourself");
    this.add.text (200,410, 'PRESS ANY KEY TO START', {fontSize: '20px'});
    //add the snake sprite! (width, height, sprite reference name -- defined in the preload method)
    let snake = this.add.sprite(this.game.renderer.width/2, 210,'snake');
    // change the size of the sprite, remember to update main.js if resizing pixel art
    snake.setScale(4);
    //adds the space key to the keyboard
    let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //create animation framerate to add to your sprites!
    this.anims.create({
      key: 'walk', //reference name
      frameRate: 10, //how fast will it move?
      repeat: -1, //repeat forever
      frames: this.anims.generateFrameNumbers('snake', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] //which sprite is affected? how many frames does the animation have?
      })
    });
    //start the animation
    snake.play('walk');
    //change scene with keystroke
    this.input.keyboard.on('keydown', () => {
      this.scene.start('MainScene')
    });
    
  }

}

