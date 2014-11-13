/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/land.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="play.ts" />
var states;
(function (states) {
    function gameOverState() {
        land.update();
    }
    states.gameOverState = gameOverState;

    // Restart Game when Try Again Button is clicked
    function tryAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked = tryAgainClicked;

    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;
        this.overworld.stop();

        dead:
        createjs.SoundInstance;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        land = new objects.Land(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);
        this.dead = createjs.Sound.play('dead', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
