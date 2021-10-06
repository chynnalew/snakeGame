import MainScene from './mainScene.js';
//create the game screen and properties
const config = {
  width: 640,
  height: 640,
  type: Phaser.AUTO,
  parent: 'phaser-game',
  scene: [MainScene]
};

new Phaser.Game(config);