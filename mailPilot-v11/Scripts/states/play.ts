/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemies.ts" />
/// <reference path="../objects/hazards.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/lifeOrb.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/land.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="gameover.ts" />

/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: The play state
**/
module states {
    export function playState() {
        land.update();
        crystal.update();
        lifeOrb.update();
        player.update();

        // update multiple hazards
        for (var count = 0; count < constants.HAZARDS_NUM; count++) {
            hazard[count].update();
        }

        // update multiple enemies
        for (var count = 0; count < constants.ENEMIES_NUM; count++) {
            enemy[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (scoreboard.score >= 100) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL_2;
            changeState(currentState);
        }
    }
    // play state Function
    export function play(): void {
        if (constants.DIFFICULTY == "easy") {
            constants.HAZARDS_NUM = 3;
            constants.ENEMIES_NUM = 0;
        }
        else if (constants.DIFFICULTY == "medium") {
            constants.HAZARDS_NUM = 4;
            constants.ENEMIES_NUM = 1;
        }
        else if (constants.DIFFICULTY == "hard") {
            constants.HAZARDS_NUM = 5;
            constants.ENEMIES_NUM = 2;
        }

        // Declare new Game Container
        game = new createjs.Container();
        if(constants.PREVIOUS_STATE == constants.GAME_OVER_STATE)
            this.dead.stop();
        // create the background music
        overworld: createjs.SoundInstance;
        // Instantiate Game Objects
        land = new objects.Land(stage, game);
        crystal = new objects.Crystal(stage, game);
        lifeOrb = new objects.lifeOrb(stage, game);
        player = new objects.player(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple hazards
        for (var count = 0; count < constants.HAZARDS_NUM; count++) {
            hazard[count] = new objects.Hazards(stage, game);
        }

        //create multiple enemies
        for (var count = 0; count < constants.ENEMIES_NUM; count++) {
            enemy[count] = new objects.enemies(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, crystal, lifeOrb, hazard, enemy, scoreboard);

        stage.addChild(game);
        this.overworld = createjs.Sound.play('overworld', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    }
}