/// <reference path="../constants.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: Not yet implimented
**/
var objects;
(function (objects) {
    var shinyLabel = (function (_super) {
        __extends(shinyLabel, _super);
        function shinyLabel(x, y, labelText) {
            _super.call(this, labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
        return shinyLabel;
    })(createjs.Text);
    objects.shinyLabel = shinyLabel;
})(objects || (objects = {}));
//# sourceMappingURL=shinyLabel.js.map
