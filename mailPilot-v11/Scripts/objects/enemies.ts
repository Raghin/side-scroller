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
        place;
        stage: createjs.Stage;
        game: createjs.Container;

        width: number;
        height: number;
        dx: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.place = Math.floor(Math.random() * 2);
            if(this.place == 0)
                this.image = new createjs.Sprite(managers.Assets.thief, (this.name = "thief"));
            else if (this.place == 1)
                this.image = new createjs.Sprite(managers.Assets.mage, (this.name = "mage"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 5 + 5); 

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
            this.destroy();
            this.place = Math.floor(Math.random() * 2);
            if (this.place == 0)
                this.image = new createjs.Sprite(managers.Assets.thief, (this.name =  "thief"));
            else if (this.place == 1)
                this.image = new createjs.Sprite(managers.Assets.mage, (this.name =  "mage"));
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 5 + 5); 
            this.image.x = this.stage.canvas.width;
            game.addChild(this.image);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }
}