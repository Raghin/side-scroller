/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/land.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/helpbutton.ts" />
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
    var gameNameLabel;
    var gameInstructionLabel;
    var instructions;

    function instructionsButtonClicked(event) {
        game.removeAllChildren();
        game.removeAllEventListeners();
        var background = new createjs.Bitmap(managers.Assets.loader.getResult("intro"));
        game.addChild(background);
        game.addChild(gameNameLabel);
        var collectablesButton = new objects.helpButton(150, 300, "enemiesButton");
        game.addChild(collectablesButton);
        collectablesButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            var background = new createjs.Bitmap(managers.Assets.loader.getResult("intro"));
            game.addChild(background);
            game.addChild(gameNameLabel);
            var backButton = new objects.helpButton(this.canvas.width / 2, 400, "backButton");
            game.addChild(backButton);
            backButton.addEventListener("click", instructionsButtonClicked);
        });
        var hazardsButton = new objects.helpButton(400, 300, "hazardsButton");
        game.addChild(hazardsButton);
        hazardsButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            var background = new createjs.Bitmap(managers.Assets.loader.getResult("intro"));
            game.addChild(background);
            game.addChild(gameNameLabel);
            var backButton = new objects.helpButton(this.canvas.width / 2, 400, "backButton");
            game.addChild(backButton);
            backButton.addEventListener("click", instructionsButtonClicked);
        });
        var enemiesButton = new objects.helpButton(150, 400, "collectablesButton");
        game.addChild(enemiesButton);
        enemiesButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            var background = new createjs.Bitmap(managers.Assets.loader.getResult("intro"));
            game.addChild(background);
            game.addChild(gameNameLabel);
            var backButton = new objects.helpButton(this.canvas.width / 2, 400, "backButton");
            game.addChild(backButton);
            backButton.addEventListener("click", instructionsButtonClicked);
        });
        var backButton = new objects.helpButton(400, 400, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            menu();
        });
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    function playButtonClicked(event) {
        game.removeAllChildren();
        game.removeAllEventListeners();

        // Display Game title
        var background = new createjs.Bitmap(managers.Assets.loader.getResult("intro"));
        game.addChild(background);
        game.addChild(gameNameLabel);
        constants.PREVIOUS_STATE = constants.MENU_STATE;
        var easyButton = new objects.Button(stage.canvas.width / 2, 150, "easyButton");
        game.addChild(easyButton);
        easyButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            land = new objects.Land(stage, game);
            player = new objects.player(stage, game);
            constants.DIFFICULTY = "easy";
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });
        var mediumButton = new objects.Button(stage.canvas.width / 2, 250, "mediumButton");
        game.addChild(mediumButton);
        mediumButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            land = new objects.Land(stage, game);
            player = new objects.player(stage, game);
            constants.DIFFICULTY = "medium";
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });
        var hardButton = new objects.Button(stage.canvas.width / 2, 350, "hardButton");
        game.addChild(hardButton);
        hardButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            land = new objects.Land(stage, game);
            player = new objects.player(stage, game);
            constants.DIFFICULTY = "hard";
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
        //land.update();
        //player.update();
    }
    states.menuState = menuState;

    function menu() {
        if (constants.PREVIOUS_STATE == constants.GAME_OVER_STATE)
            this.dead.stop();

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        //land = new objects.Land(stage, game);
        //player = new objects.player(stage, game);
        var background = new createjs.Bitmap(managers.Assets.loader.getResult("intro"));
        game.addChild(background);

        // Show Cursor
        stage.cursor = "default";

        // Display Game title
        gameNameLabel = new createjs.Bitmap(managers.Assets.loader.getResult("title"));
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

        var instructionsButton = new objects.helpButton(150, 380, "instructionsButton");
        game.addChild(instructionsButton);
        instructionsButton.addEventListener("click", instructionsButtonClicked);

        // Display Play Button
        playButton = new objects.Button(400, 380, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
