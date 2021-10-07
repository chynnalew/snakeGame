import Phaser from './lib/phaser.js';
import TitleScreen from './scenes/titleScreen.js';

//create the game screen and properties
const config = {
  width: 640,
  height: 640,
  type: Phaser.AUTO,
  scene: [TitleScreen],
  //add this line so pixel art doesn't get distorted when resized!
  render: {
    pixelArt: true
  }
};

new Phaser.Game(config);