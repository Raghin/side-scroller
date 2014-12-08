/// <reference path="../managers/asset.ts" />
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The land the player walks on
**/
var objects;
(function (objects) {
    // land Class
    var Land = (function () {
        function Land(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("land"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }
        Land.prototype.update = function () {
            this.image.x -= this.dy;
            if (this.image.x <= -900) {
                this.reset();
            }
        };

        Land.prototype.reset = function () {
            this.image.x = +0;
        };

        Land.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Land;
    })();
    objects.Land = Land;
})(objects || (objects = {}));
//# sourceMappingURL=land.js.map
