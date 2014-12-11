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
    export function level3State() {
        land.update();
        crystal.update();
        lifeOrb.update();
        player.update();

        // Create multiple hazards
        for (var count = 0; count < constants.HAZARDS_NUM; count++) {
            hazard[count].update();
        }

        // update multiple enemies
        for (var count = 0; count < constants.ENEMIES_NUM; count++) {
            enemy[count].update();
        }

        collision.update();
        scoreboard.update();
        //levelLabel.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    // play state Function
    export function level3(): void {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        land = new objects.Land(stage, game);
        land.setWasteland();
        crystal = new objects.Crystal(stage, game);
        lifeOrb = new objects.lifeOrb(stage, game);
        player = new objects.player(stage, game);
        constants.HAZARDS_NUM = constants.HAZARDS_NUM * 1.5;
        if (constants.ENEMIES_NUM == 1)
            constants.ENEMIES_NUM = 2;
        else
            constants.ENEMIES_NUM = constants.ENEMIES_NUM * 1.5;

        //display the level
        //levelLabel = new objects.LevelLabel("level 2");

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
        scoreboard.showScoreBoard();

        // Instantiate Collision Manager
        collision = new managers.Collision(player, crystal, lifeOrb, hazard, enemy, scoreboard);

        stage.addChild(game);
    }
}