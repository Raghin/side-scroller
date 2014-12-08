/// <reference path="../managers/asset.ts" />
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: A life orb that adds life
**/
var objects;
(function (objects) {
    // lifeOrb Class
    var lifeOrb = (function () {
        function lifeOrb(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.collectables, "life orb");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        lifeOrb.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        lifeOrb.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width + Math.floor(Math.random() * this.stage.canvas.width);
        };

        lifeOrb.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return lifeOrb;
    })();
    objects.lifeOrb = lifeOrb;
})(objects || (objects = {}));
//# sourceMappingURL=lifeOrb.js.map
