import MonoBehaviour from '../framework/engine/MonoBehaviour/MonoBehaviour';
import world from '../framework/engine/Build/World';

export default class Sky extends MonoBehaviour {
    constructor(props) {
        super(props);
    }

    preload() {
        window.game.load.image('sky', 'game/assets/sky.png');
    }

    create() {
        let sky = world.createSprite('sky',0, 0, 'sky');
    }

    update() {

    }
}
