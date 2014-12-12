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
            this.testLabel = new createjs.BitmapText(this.labelText, managers.Assets.bitMapFont);
            this.update();
            this.width = this.testLabel.getBounds().width;
            this.height = this.testLabel.getBounds().height;
            this.fontSize(25);
            this.update();

            this.showScoreBoard();
        }
        Scoreboard.prototype.update = function () {
            this.livesValueLabelString = this.lives.toString();
            this.scoreValueLabelString = this.score.toString();
            this.labelText = "Lives: " + this.livesValueLabelString + " Score: " + this.scoreValueLabelString;
            this.testLabel.text = this.labelText;
        };

        Scoreboard.prototype.showScoreBoard = function () {
            game.addChild(this.testLabel);
        };

        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.testLabel);
        };

        Scoreboard.prototype.fontSize = function (size) {
            var scale = size / this.testLabel.getBounds().height;

            this.testLabel.scaleX = scale;
            this.testLabel.scaleY = scale;
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
