import MonoBehaviour from '../framework/engine/MonoBehaviour/MonoBehaviour';
import world from '../framework/engine/Build/World';

export default class Ground extends MonoBehaviour {
    constructor(props) {
        super(props);
    }

    preload() {
        window.game.load.image('ground', 'game/assets/platform.png');
    }

    create() {
        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = world.createGroup('platforms');

        //  We will enable physics for any object that is created in this group
        this.platforms.enableBody = true;

        // Here we create the ground.
        let ground = world.createSprite('ground1', 0, window.game.world.height - 64, 'ground');
        this.platforms.add(ground);

        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(2, 2);

        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;

        //  Now let's create two ledges
        let ledge = this.platforms.create(400, 400, 'ground');

        ledge.body.immovable = true;

        ledge = this.platforms.create(-150, 250, 'ground');

        ledge.body.immovable = true;
    }

    update() {

    }
}
