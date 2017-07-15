import MonoBehaviour from '../framework/engine/MonoBehaviour/MonoBehaviour';
import gameObject from '../framework/GameObject';

export default class Score extends MonoBehaviour {
    constructor(props) {
        super(props);

        this.score = 0;
    }

    preload() {
        window.game.load.image('sky', 'game/assets/sky.png');
    }

    create() {
        this.scoreText = gameObject.addText('score', 16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }

    update() {

    }

    increaseScore() {
        let score = gameObject.findText('score');
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
    }
}
