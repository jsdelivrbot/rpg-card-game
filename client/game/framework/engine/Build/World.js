import GameEngine from '../GameEngine';
import hubObjects from '../Hub';

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

    destroy() {

    }

    createSprite(uniqueId, x, y, key, frame, group ) {
        hubObjects.sprites[uniqueId] = window.game.add.sprite( x, y, key, frame, group );
        hubObjects.sprites[uniqueId].uniqueId = uniqueId;
        hubObjects.sprites[uniqueId].events.onKilled.add(function () {
            delete hubObjects.sprites[uniqueId];
        }, this);

        return hubObjects.sprites[uniqueId];
    }

    createGroup(uniqueId) {
        hubObjects.groups[uniqueId] = window.game.add.group();
        hubObjects.groups[uniqueId].uniqueId = uniqueId;
        hubObjects.groups[uniqueId].onDestroy.add(function () {
            delete hubObjects.groups[uniqueId];
        }, this);

        return hubObjects.groups[uniqueId];
    }

    getSprite(uniqueId) {
        return hubObjects.sprites[uniqueId];
    }

    getGroup(uniqueId) {
        return hubObjects.groups[uniqueId];
    }

}

//singleton
export default new World();