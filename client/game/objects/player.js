import MonoBehaviour from '../framework/engine/MonoBehaviour/MonoBehaviour';
import world from '../framework/engine/Build/World';

export default class Player extends MonoBehaviour {
    constructor(props) {
        super(props);

        this.player = null;
    }

    preload() {
        window.game.load.spritesheet('dude', 'game/assets/dude.png', 32, 48);
    }

    create() {
        this.cursors = window.game.input.keyboard.createCursorKeys();

        // The player and its settings
        this.player = world.createSprite('mainPlayer', 32, window.game.world.height - 150, 'dude');

        //  We need to enable physics on the player
        window.game.physics.arcade.enable(this.player);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    }

    update() {

        this.player.bringToTop();

        //  Collide the player and the stars with the platforms
        window.game.physics.arcade.overlap(this.player, world.getGroup('stars'), this.collectStar, null, this);
        window.game.physics.arcade.collide(world.getGroup('stars'), world.getGroup('platforms'));
        let hitPlatform = window.game.physics.arcade.collide(this.player, world.getGroup('platforms'));


        //  Reset the players velocity (movement)
        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown)
        {
            //  Move to the left
            this.player.body.velocity.x = -150;

            this.player.animations.play('left');
        }
        else if (this.cursors.right.isDown)
        {
            //  Move to the right
            this.player.body.velocity.x = 150;

            this.player.animations.play('right');
        }
        else
        {
            //  Stand still
            this.player.animations.stop();

            this.player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.player.body.touching.down && hitPlatform)
        {
            this.player.body.velocity.y = -330;
        }


    }

    collectStar(player, star) {

        // Removes the star from the screen
        star.kill();

        //  Add and update the score
        //this.score += 10;
        //this.scoreText.text = 'Score: ' + this.score;
    }
}