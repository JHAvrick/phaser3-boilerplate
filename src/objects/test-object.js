import Phaser from "phaser";

class TestObject extends Phaser.GameObjects.Sprite {
    constructor(scene){
        super(scene, 0, 0, 'station');


        scene.add.existing(this); 
    }

    update(){
        this.angle += .5;
    }
}

export default TestObject;