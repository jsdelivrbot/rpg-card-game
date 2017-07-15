import MonoBehaviour from '../framework/engine/MonoBehaviour/MonoBehaviour';
import gameObject from '../framework/GameObject';

export default class Sky extends MonoBehaviour {
    constructor(props) {
        super(props);
    }

    preload() {
        window.game.load.image('sky', 'game/assets/sky.png');
    }

    create() {
        let sky = gameObject.addSprite('sky',0, 0, 'sky');
    }

    update() {

    }
}
