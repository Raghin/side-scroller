/// <reference path="../managers/asset.ts" />

/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: The land the player walks on
**/
module objects {
    // land Class
    export class Land {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("land"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }
        
        update() {
            this.image.x -= this.dy;
            if (this.image.x <= -900) {
                this.reset();
            }
            
        }

        setDesert() {
            this.destroy();
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("desert"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            game.addChild(this.image);
        }

        setWasteland() {
            this.destroy();
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("wasteland"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            game.addChild(this.image);
        }

        reset() {
            this.image.x = +0;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}