import GameEngine from './GameEngine';
import MonoBehaviourObserver from './MonoBehaviorObserver';

export default class MonoBehaviour extends GameEngine {
    constructor() {
        super();

        // properties
        this.layer = 0;

        MonoBehaviourObserver.Attach(this);
    }

    preload() {

    }

    create() {

    }

    update() {

    }

    destroy() {
        MonoBehaviourObserver.Detach(this);
    }
}




