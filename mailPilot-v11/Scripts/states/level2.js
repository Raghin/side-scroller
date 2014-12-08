/// <reference path="../constants.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/land.ts" />
/// <reference path="../objects/lifeorb.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/vertfirepit.ts" />
/// <reference path="../objects/horfirepit.ts" />
/// <reference path="../objects/vertpit.ts" />
/// <reference path="../objects/horpit.ts" />
/// <reference path="../objects/hazards.ts" />
/**
Author: Peter Smith, David Harris
Last Modified by: David Harris
Last Modified: December 8, 2014
Description: The play state
**/
var states;
(function (states) {
    function level2State() {
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
    states.level2State = level2State;

    function Level2() {
        game = new createjs.Container();
        land = new objects.Land(stage, game);
        crystal = new objects.Crystal(stage, game);
        lifeOrb = new objects.lifeOrb(stage, game);
        player = new objects.player(stage, game);

        for (var count = 0; count < constants.OBJECTS_NUM; count++) {
            stones[count] = new objects.Hazards(stage, game);
            horPit[count] = new objects.horPit(stage, game);
            vertPit[count] = new objects.vertPit(stage, game);
            horFirePit[count] = new objects.horFirePit(stage, game);
            vertFirePit[count] = new objects.vertFirePit(stage, game);
        }

        scoreboard.update();

        // Instantiate Collision Manager
        collision = new managers.Collision(player, crystal, lifeOrb, stones, vertPit, horPit, vertFirePit, horFirePit, scoreboard);

        stage.addChild(game);
    }
    states.Level2 = Level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map
