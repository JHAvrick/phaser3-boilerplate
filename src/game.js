import Phaser from 'phaser';
import { Preload, Main, Results } from 'scenes/scenes';

/**
 * Set up game config and create scenes
 */
const config = {
    type: Phaser.WEBGL,
    parent: 'game-container',
    width: 400,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [
        Preload,
        Main,
        Results
    ],
    /*
    plugins: {
        scene: [
            { 
                key: 'transitions', 
                mapping: 'transitions',
                plugin: TransitionsPlugin
            }
        ]
    },
    */
};

const game = new Phaser.Game(config);