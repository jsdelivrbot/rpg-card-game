import GameEngine from '../GameEngine';

class World extends GameEngine {
    constructor() {
        super();
        this._initProps();
    }

    _initProps() {
        this.width = 800;
        this.height = 600;
        this.renderer = window.Phaser.AUTO;
        this.parent = 'game';
    }

    build(scene) {
        if(!window.game )
            window.game = new window.Phaser.Game(this.width, this.height, this.renderer, this.parent, { preload: this.preload.bind(this), create: this.create.bind(this), update: this.update.bind(this) });
    }

    preload() {

    }

    create() {

    }

    update() {

    }

}

//singleton
export default new World();