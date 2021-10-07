import Phaser from './lib/phaser.js';
import MainScene from './scenes/mainScene.js';
import TitleScreen from './scenes/titleScreen.js';

//create the game screen and properties
const config = {
  width: 640,
  height: 640,
  type: Phaser.AUTO,
  backgroundColor: '#242424', //hex color
  scene: [
    TitleScreen,
    MainScene
  ], //what scenes are you using? 
  render: {
    pixelArt: true //add this line so pixel art doesn't get distorted when resized!
  }
};

new Phaser.Game(config);