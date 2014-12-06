/// <reference path="../objects/button.ts" />
/// <reference path="../objects/hazards.ts" />
/// <reference path="../objects/vertPit.ts" />
/// <reference path="../objects/horPit.ts" />
/// <reference path="../objects/vertFirePit.ts" />
/// <reference path="../objects/horFirePit.ts" />
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
        

        for (var count = 0; count < constants.OBJECTS_NUM; count++) {
            stones[count].update();
            vertPit[count].update();
            horPit[count].update();
            vertFirePit[count].update();
            horFirePit[count].update();
        }

        // Create multiple hazards
        for (var count = 0; count < constants.HAZARDS_NUM; count++) {
            stones[count].update();
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
    }
    var run: number = 0;
    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();
        if(run == 1)
            this.dead.stop();
        // create the background music
        overworld: createjs.SoundInstance;
        run = 1;
        // Instantiate Game Objects
        land = new objects.Land(stage, game);
        crystal = new objects.Crystal(stage, game);
        lifeOrb = new objects.lifeOrb(stage, game);
        player = new objects.player(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple hazards
        for (var count = 0; count < constants.OBJECTS_NUM; count++) {
            stones[count] = new objects.Hazards(stage, game);
            horPit[count] = new objects.horPit(stage, game);
            vertPit[count] = new objects.vertPit(stage, game);
            horFirePit[count] = new objects.horFirePit(stage, game);
            vertFirePit[count] = new objects.vertFirePit(stage, game);
        }

        // Create multiple hazards
        for (var count = 0; count < constants.HAZARDS_NUM; count++) {
            stones[count] = new objects.Hazards(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, crystal, lifeOrb, stones, vertPit, horPit, vertFirePit, horFirePit, scoreboard);

        stage.addChild(game);
        this.overworld = createjs.Sound.play('overworld', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    }
}