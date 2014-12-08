/// <reference path="../managers/asset.ts" />
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The main players information
**/
var objects;
(function (objects) {
    // Player Class
    var player = (function () {
        function player(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.character, "frame 2");
            this.image.x = 50;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
        }
        player.prototype.update = function () {
            this.image.y = this.stage.mouseY;
        };
        player.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return player;
    })();
    objects.player = player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
