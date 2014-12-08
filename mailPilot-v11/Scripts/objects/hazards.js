/// <reference path="../managers/asset.ts" />
/// <reference path="lifeOrb.ts" />
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: A stone hazard object
**/
var objects;
(function (objects) {
    // Cloud class
    var Hazards = (function () {
        function Hazards(stage, game) {
            this.images = [];
            this.images[0] = "stones";
            this.images[1] = "hor pit";
            this.images[2] = "vert pit";
            this.images[3] = "hor firepit";
            this.images[4] = "vert firepit";
            this.image = new createjs.Sprite(managers.Assets.hazards, (this.name = this.images[Math.floor(Math.random() * 4)]));
            this.stage = stage;
            this.game = game;

            //this.image = new createjs.Sprite(managers.Assets.hazards, "stones");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Hazards.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        Hazards.prototype.reset = function () {
            game.removeChild(this.image);
            this.image = new createjs.Sprite(managers.Assets.hazards, (this.name = this.images[Math.floor(Math.random() * 4)]));
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width + Math.floor(Math.random() * this.stage.canvas.width);
            game.addChild(this.image);
        };

        Hazards.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Hazards;
    })();
    objects.Hazards = Hazards;
})(objects || (objects = {}));
//# sourceMappingURL=hazards.js.map
