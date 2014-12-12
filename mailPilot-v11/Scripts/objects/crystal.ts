/// <reference path="../managers/asset.ts" />

/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: The crystals you collect
**/
module objects {
    // Crystal Class
    export class Crystal {
        image: createjs.Sprite;
        images = [];
        name;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.images[0] = "crystal";
            this.images[1] = "red gem";
            this.images[2] = "blue gem";
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.collectables, (this.name = this.images[Math.floor(Math.random() * 3)]));
            //this.image = new createjs.Sprite(managers.Assets.collectables, "crystal");
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
            this.destroy();
            this.image = new createjs.Sprite(managers.Assets.collectables, (this.name = this.images[Math.floor(Math.random() * 3)]));
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width + Math.floor(Math.random() * this.stage.canvas.width);
            this.game.addChild(this.image);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}