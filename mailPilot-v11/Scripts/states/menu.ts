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

module states {
    var gameNameLabel: createjs.Bitmap;
    var gameInstructionLabel: objects.Label;
    var instructions: objects.Label;

    export function instructionsButtonClicked(event: MouseEvent) {
        game.removeAllChildren();
        game.removeAllEventListeners();
        var background = new createjs.Bitmap(managers.Assets.loader.getResult("intro"));
        game.addChild(background);
        game.addChild(gameNameLabel);
        // display instructions label
        gameInstructionLabel = new objects.Label(stage.canvas.width / 2, 95, "Instructions");
        gameInstructionLabel.fontSize(40);
        game.addChild(gameInstructionLabel);

        gameInstructionLabel = new objects.Label(stage.canvas.width / 2, 135, "Avoid enemies and hazards");
        gameInstructionLabel.fontSize(25);
        game.addChild(gameInstructionLabel);
        gameInstructionLabel = new objects.Label(stage.canvas.width / 2, 165, "while collecting crystals");
        gameInstructionLabel.fontSize(25);
        game.addChild(gameInstructionLabel);
        gameInstructionLabel = new objects.Label(stage.canvas.width / 2, 195, "and life orbs by using the");
        gameInstructionLabel.fontSize(25);
        game.addChild(gameInstructionLabel);
        gameInstructionLabel = new objects.Label(stage.canvas.width / 2, 225, "mouse to go up or down");
        gameInstructionLabel.fontSize(25);
        game.addChild(gameInstructionLabel);
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
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 135, "Thief: lose 50 points");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.thief, "thief");
            pic.x = stage.canvas.width * 2/3;
            pic.y = 120;
            game.addChild(pic)
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 175, "Mage: lose 1 life point");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.mage, "mage");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 160;
            game.addChild(pic)
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
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 135, "Stones: lose 1 life point");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.hazards, "stones");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 120;
            game.addChild(pic)
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 175, "Pit: lose 2 life points");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.hazards, "hor pit");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 160;
            game.addChild(pic)
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 215, "Lava Pit: lose 3 life points");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.hazards, "hor firepit");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 200;
            game.addChild(pic)
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
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 135, "Crystal: gain 100 points");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.collectables, "crystal");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 120;
            game.addChild(pic)
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 175, "Red gem: gain 150 points");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.collectables, "red gem");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 160;
            game.addChild(pic)
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 215, "blue gem: gain 200 points");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.collectables, "blue gem");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 200;
            game.addChild(pic)
            gameInstructionLabel = new objects.Label(stage.canvas.width / 3, 255, "life orb: gain 1 life");
            gameInstructionLabel.fontSize(20);
            game.addChild(gameInstructionLabel);
            var pic = new createjs.Sprite(managers.Assets.collectables, "life orb");
            pic.x = stage.canvas.width * 2 / 3;
            pic.y = 240;
            game.addChild(pic)
            gameInstructionLabel = new objects.Label(stage.canvas.width / 2, 295, "level up occurs at 750 and 1500 points");
            gameInstructionLabel.fontSize(19);
            game.addChild(gameInstructionLabel);
        });
        var backButton = new objects.helpButton(400, 400, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            menu();
        });
    }

    export function playButtonClicked(event: MouseEvent) {
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

    export function menuState() {
        //land.update();
        //player.update();
    }

    export function menu() {
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

        var instructionsButton = new objects.helpButton(150, 380, "instructionsButton");
        game.addChild(instructionsButton);
        instructionsButton.addEventListener("click", instructionsButtonClicked);

        // Display Play Button
        playButton = new objects.Button(400, 380, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 