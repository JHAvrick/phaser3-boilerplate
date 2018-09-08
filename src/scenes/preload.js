import Phaser from 'phaser';

class Preload extends Phaser.Scene {
    constructor () {
        super({key: 'Preload' });
    }

    init(){console.log("Preload...")}

    preload(){}

    create(){
        this.scene.start('Main');
    }

}

export default Preload;