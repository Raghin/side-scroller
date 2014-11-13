/// <reference path="../objects/button.ts" />
/// <reference path="../objects/hazards.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/lifeOrb.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/land.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    export function playState() {
        land.update();
        crystal.update();
        lifeOrb.update();
        player.update();

        for (var count = 0; count < constants.HAZARDS_NUM; count++) {
            hazards[count].update();
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

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        land = new objects.Land(stage, game);
        crystal = new objects.Crystal(stage, game);
        lifeOrb = new objects.lifeOrb(stage, game);
        player = new objects.player(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple hazards
        for (var count = 0; count < constants.HAZARDS_NUM; count++) {
            hazards[count] = new objects.Hazards(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, crystal, lifeOrb, hazards, scoreboard);

        stage.addChild(game);
    }
}