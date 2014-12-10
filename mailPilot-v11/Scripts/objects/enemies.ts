/// <reference path="../managers/asset.ts" />

/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: A stone hazard object
**/
module objects {
    // Cloud class
    export class enemies {
        image: createjs.Sprite;
        name;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.hazards, "thief 2");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = Math.floor(Math.random() * 10);
            this.dy = Math.floor(Math.random() * 10);

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            this.image.y -= this.dy;
            if (this.image.x < 0 || this.image.y < 0 || this.image.y > 445) {
                this.reset();
            }
        }

        reset() {
            this.image.y = constants.COORDINATES[Math.floor(Math.random() * 6)];
            this.image.x = this.stage.canvas.width + constants.COORDINATES[Math.floor(Math.random() * 6)];
        }

        destroy() {
            game.removeChild(this.image);
        }
    }
}