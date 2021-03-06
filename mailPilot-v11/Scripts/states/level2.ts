﻿/// <reference path="../objects/button.ts" />
/// <reference path="../objects/hazards.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/enemies.ts" />
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
    export function level2State() {
        land.update();
        //crystal.update();
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

		// update multiple crystals
        for (var count = 0; count < constants.CRYSTALS_NUM; count++) {
            crystal[count].update();
        }

        collision.update();
        scoreboard.update();
        //levelLabel.update();

        if (scoreboard.lives <= 0 || scoreboard.score < 0) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
            if (scoreboard.score < 0)
                scoreboard.score = 0
        }

        if (scoreboard.score >= 1500) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL_3;
            changeState(currentState);
        }
    }
    // play state Function
    export function level2(): void {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        land = new objects.Land(stage, game);
        land.setDesert();
        //crystal = new objects.Crystal(stage, game);
        lifeOrb = new objects.lifeOrb(stage, game);
        player = new objects.player(stage, game);
        constants.HAZARDS_NUM = constants.HAZARDS_NUM * 2;
        if (constants.ENEMIES_NUM == 0)
            constants.ENEMIES_NUM = 1;
        else
            constants.ENEMIES_NUM = constants.ENEMIES_NUM * 2;

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
		//create multiple crystals
        for (var count = 0; count < constants.CRYSTALS_NUM; count++) {
            crystal[count] = new objects.Crystal(stage, game);
        }

        // Display Scoreboard
        scoreboard.showScoreBoard();

        // Instantiate Collision Manager
        collision = new managers.Collision(player, crystal, lifeOrb, hazard, enemy, scoreboard);

        stage.addChild(game);
    }
}