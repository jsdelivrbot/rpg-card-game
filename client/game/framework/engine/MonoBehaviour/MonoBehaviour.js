import GameEngine from '../GameEngine';
import MonoBehaviourObserver from './MonoBehaviorObserver';

export default class MonoBehaviour extends GameEngine {
    constructor(props) {
        super();

        // properties
        this.layer = 0;

        this._initProps(props);

        MonoBehaviourObserver.Attach(this);
    }

    _initProps(props) {
        if(!props) return;

        this.layer = props.layer ? props.layer : 0;
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




