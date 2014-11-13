/// <reference path="../managers/asset.ts" />
/// <reference path="lifeOrb.ts" />
module objects {
    // Cloud class
    export class Hazards {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.hazards, "stones");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width + Math.floor(Math.random() * this.stage.canvas.width);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }
}