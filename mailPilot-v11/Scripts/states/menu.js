/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/land.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The main menu state
**/
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
        land.update();
        player.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;
        var gameInstructionLabel;
        var instructions;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        land = new objects.Land(stage, game);
        player = new objects.player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game title
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 20, "Crystal Plains");
        game.addChild(gameNameLabel);

        // display instructions label
        gameInstructionLabel = new objects.Label(stage.canvas.width / 2, 70, "Instructions:");
        game.addChild(gameInstructionLabel);

        // display instructions
        instructions = new objects.Label(stage.canvas.width / 2, 110, "1) Collect crystals");
        game.addChild(instructions);
        instructions = new objects.Label(stage.canvas.width / 2, 150, "2) Collect lifeOrbs");
        game.addChild(instructions);
        instructions = new objects.Label(stage.canvas.width / 2, 190, "3) Survive");
        game.addChild(instructions);
        instructions = new objects.Label(stage.canvas.width / 2, 230, "Avoid: stones -1,");
        game.addChild(instructions);
        instructions = new objects.Label(stage.canvas.width / 2, 270, "pits -2, firepits -3");
        game.addChild(instructions);

        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 380, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
