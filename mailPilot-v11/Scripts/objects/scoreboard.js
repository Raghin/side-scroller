/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The games scoreboard
**/
var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(stage, game) {
            this.labelText = "";
            this.scoreValueLabelString = "";
            this.livesValueLabelString = "";
            this.stage = stage;
            this.game = game;
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            this.update();

            this.showScoreBoard();
        }
        Scoreboard.prototype.update = function () {
            this.livesValueLabelString = this.lives.toString();
            this.scoreValueLabelString = this.score.toString();
            this.labelText = "Lives: " + this.livesValueLabelString + " Score: " + this.scoreValueLabelString;
            this.label.text = this.labelText;
        };

        Scoreboard.prototype.showScoreBoard = function () {
            game.addChild(this.label);
        };

        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
