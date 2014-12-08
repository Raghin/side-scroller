/// <reference path="../managers/asset.ts" />
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The crystals you collect
**/
var objects;
(function (objects) {
    // Crystal Class
    var Crystal = (function () {
        function Crystal(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.collectables, "crystal");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Crystal.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        Crystal.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width + Math.floor(Math.random() * this.stage.canvas.width);
        };

        Crystal.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Crystal;
    })();
    objects.Crystal = Crystal;
})(objects || (objects = {}));
//# sourceMappingURL=crystal.js.map
