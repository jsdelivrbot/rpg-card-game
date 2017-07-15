import MonoBehaviour from './engine/MonoBehaviour';

export default class Player extends MonoBehaviour {
    constructor() {
        super();
    }

    preload() {
        console.log("preload player");
    }

    create() {
        console.log("create player");
    }

    update() {
        console.log("update player");
    }
}