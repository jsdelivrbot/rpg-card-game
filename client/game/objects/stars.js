import MonoBehaviour from '../framework/engine/MonoBehaviour/MonoBehaviour';
import gameObject from '../framework/GameObject';

export default class Stars extends MonoBehaviour {
    constructor(props) {
        super(props);
    }

    preload() {
        window.game.load.image('star', 'game/assets/star.png');
    }

    create() {
        this.stars = gameObject.addGroup('stars');

        this.stars.enableBody = true;

        //  Here we'll create 12 of them evenly spaced apart
        for (let i = 0; i < 12; i++)
        {
            //  Create a star inside of the 'stars' group
            let star = gameObject.addSprite('start' + i,i * 70, 0, 'star');
            this.stars.add(star);

            //  Let gravity do its thing
            star.body.gravity.y = 100;

            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }
    }

    update() {

    }
}
