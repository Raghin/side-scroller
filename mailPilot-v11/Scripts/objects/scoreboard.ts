
/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: The games scoreboard
**/
module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        label: createjs.Text;
        testLabel: createjs.BitmapText;
        labelText: string = "";
        width: number;
        height: number;
        scoreValueLabelString: string = "";
        livesValueLabelString: string = "";
        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        update() {
            this.livesValueLabelString = this.lives.toString();
            this.scoreValueLabelString = this.score.toString();
            this.labelText = "Lives: " + this.livesValueLabelString + " Score: " + this.scoreValueLabelString;
            this.testLabel.text = this.labelText;
        }

        showScoreBoard() {
            game.addChild(this.testLabel);
        }

        destroy() {
            game.removeChild(this.testLabel);
        }

        fontSize(size: number) {
            var scale: number = size / this.testLabel.getBounds().height;

            this.testLabel.scaleX = scale;
            this.testLabel.scaleY = scale;
        }
    }
} 