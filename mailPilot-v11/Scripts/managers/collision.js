/// <reference path="../objects/hazards.ts" />
/// <reference path="../objects/vertPit.ts" />
/// <reference path="../objects/horPit.ts" />
/// <reference path="../objects/vertFirePit.ts" />
/// <reference path="../objects/horFirePit.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/lifeOrb.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The collision manager that subtracts life from player and "tries" to prevent object overlapping
**/
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(player, crystal, lifeOrb, hazards, vertPit, horPit, verFirePit, horFirePit, scoreboard) {
            this.hazards = [];
            this.vertPit = [];
            this.horPit = [];
            this.vertFirePit = [];
            this.horFirePit = [];
            this.player = player;
            this.crystal = crystal;
            this.lifeOrb = lifeOrb;
            this.hazards = hazards;
            this.vertPit = vertPit;
            this.horPit = horPit;
            this.vertFirePit = vertFirePit;
            this.horFirePit = horFirePit;
            this;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        //check for overlap between items
        Collision.prototype.overlap = function (hazards, vertPit, horPit, vertFirePit, horFirePit) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            var p3 = new createjs.Point();
            var p4 = new createjs.Point();
            var p5 = new createjs.Point();
            var p6 = new createjs.Point();
            var p7 = new createjs.Point();
            p1.x = this.crystal.image.x;
            p1.y = this.crystal.image.y;
            p2.x = hazards.image.x;
            p2.y = hazards.image.y;
            p3.x = this.lifeOrb.image.x;
            p3.y = this.lifeOrb.image.y;
            p4.x = vertPit.image.x;
            p4.y = vertPit.image.y;
            p5.x = horPit.image.x;
            p5.y = horPit.image.y;
            p6.x = vertFirePit.image.x;
            p6.y = vertFirePit.image.y;
            p7.x = horFirePit.image.x;
            p7.y = horFirePit.image.y;
            if (this.distance(p1, p2) < ((this.crystal.width / 2) + (hazards.width / 2)) || this.distance(p1, p2) < ((this.crystal.height / 2) + (hazards.height / 2))) {
                crystal.reset();
                hazards.reset();
            } else if (this.distance(p1, p4) < ((this.crystal.width / 2) + (vertPit.width / 2)) || this.distance(p1, p4) < ((this.crystal.height / 2) + (vertPit.height / 2))) {
                crystal.reset();
                vertPit.reset();
            } else if (this.distance(p1, p5) < ((this.crystal.width / 2) + (horPit.width / 2)) || this.distance(p1, p5) < ((this.crystal.height / 2) + (horPit.height / 2))) {
                horPit.reset();
                crystal.reset();
            } else if (this.distance(p1, p6) < ((this.crystal.width / 2) + (vertFirePit.width / 2)) || this.distance(p1, p6) < ((this.crystal.height / 2) + (vertFirePit.height / 2))) {
                vertFirePit.reset();
                crystal.reset();
            } else if (this.distance(p1, p7) < ((this.crystal.width / 2) + (horFirePit.width / 2)) || this.distance(p1, p7) < ((this.crystal.height / 2) + (horFirePit.height / 2))) {
                horFirePit.reset();
                crystal.reset();
            } else if (this.distance(p2, p3) < ((this.lifeOrb.width / 2) + (hazards.width / 2)) || this.distance(p2, p3) < ((this.lifeOrb.height / 2) + (hazards.height / 2))) {
                lifeOrb.reset();
                hazards.reset();
            } else if (this.distance(p3, p4) < ((this.lifeOrb.width / 2) + (vertPit.width / 2)) || this.distance(p2, p3) < ((this.lifeOrb.height / 2) + (vertPit.height / 2))) {
                lifeOrb.reset();
                vertPit.reset();
            } else if (this.distance(p3, p5) < ((this.lifeOrb.width / 2) + (horPit.width / 2)) || this.distance(p2, p3) < ((this.lifeOrb.height / 2) + (horPit.height / 2))) {
                lifeOrb.reset();
                horPit.reset();
            } else if (this.distance(p3, p6) < ((this.lifeOrb.width / 2) + (vertFirePit.width / 2)) || this.distance(p2, p3) < ((this.lifeOrb.height / 2) + (vertFirePit.height / 2))) {
                lifeOrb.reset();
                vertFirePit.reset();
            } else if (this.distance(p3, p7) < ((this.lifeOrb.width / 2) + (horFirePit.width / 2)) || this.distance(p2, p3) < ((this.lifeOrb.height / 2) + (horFirePit.height / 2))) {
                lifeOrb.reset();
                horFirePit.reset();
            } else if (this.distance(p1, p3) < ((this.lifeOrb.width / 2) + (crystal.width / 2)) || this.distance(p1, p3) < ((this.lifeOrb.height / 2) + (crystal.height / 2))) {
                lifeOrb.reset();
                crystal.reset();
            } else if (this.distance(p2, p4) < ((vertPit.width / 2) + (hazards.width / 2)) || this.distance(p2, p4) < ((vertPit.height / 2) + (hazards.height / 2))) {
                vertPit.reset();
                hazards.reset();
            } else if (this.distance(p2, p5) < ((horPit.width / 2) + (hazards.width / 2)) || this.distance(p2, p5) < ((horPit.height / 2) + (hazards.height / 2))) {
                horPit.reset();
                hazards.reset();
            } else if (this.distance(p2, p6) < ((vertFirePit.width / 2) + (hazards.width / 2)) || this.distance(p2, p6) < ((vertFirePit.height / 2) + (hazards.height / 2))) {
                vertFirePit.reset();
                hazards.reset();
            } else if (this.distance(p2, p7) < ((horFirePit.width / 2) + (hazards.width / 2)) || this.distance(p2, p7) < ((horFirePit.height / 2) + (hazards.height / 2))) {
                horFirePit.reset();
                hazards.reset();
            } else if (this.distance(p4, p5) < ((vertPit.width / 2) + (horPit.width / 2)) || this.distance(p4, p5) < ((vertPit.height / 2) + (horPit.height / 2))) {
                vertPit.reset();
                horPit.reset();
            } else if (this.distance(p4, p6) < ((vertPit.width / 2) + (vertFirePit.width / 2)) || this.distance(p4, p6) < ((vertPit.height / 2) + (vertFirePit.height / 2))) {
                vertPit.reset();
                vertFirePit.reset();
            } else if (this.distance(p4, p7) < ((vertPit.width / 2) + (horFirePit.width / 2)) || this.distance(p4, p7) < ((vertPit.height / 2) + (horFirePit.height / 2))) {
                vertPit.reset();
                horFirePit.reset();
            } else if (this.distance(p5, p6) < ((horPit.width / 2) + (vertFirePit.width / 2)) || this.distance(p5, p6) < ((horPit.height / 2) + (vertFirePit.height / 2))) {
                horPit.reset();
                vertFirePit.reset();
            } else if (this.distance(p5, p7) < ((horPit.width / 2) + (horFirePit.width / 2)) || this.distance(p5, p7) < ((horPit.height / 2) + (horFirePit.height / 2))) {
                horPit.reset();
                horFirePit.reset();
            } else if (this.distance(p6, p7) < ((vertFirePit.width / 2) + (horFirePit.width / 2)) || this.distance(p6, p7) < ((vertFirePit.height / 2) + (horFirePit.height / 2))) {
                vertFirePit.reset();
                horFirePit.reset();
            }
        };

        Collision.prototype.playerAndHazard = function (hazards) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = hazards.image.x;
            p2.y = hazards.image.y;
            if (this.distance(p1, p2) < ((this.player.width / 2) + (hazards.width / 2))) {
                createjs.Sound.play("hurt");
                if (hazards.name == "stones")
                    this.scoreboard.lives -= 1;
                else if (hazards.name == "vert pit")
                    this.scoreboard.lives -= 2;
                else if (hazards.name == "hor pit")
                    this.scoreboard.lives -= 2;
                else if (hazards.name == "vert firepit")
                    this.scoreboard.lives -= 3;
                else if (hazards.name == "hor firepit")
                    this.scoreboard.lives -= 3;
                hazards.reset();
            }
        };

        // check collision between player and crystal
        Collision.prototype.playerAndCrystal = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = this.crystal.image.x;
            p2.y = this.crystal.image.y;
            if (this.distance(p1, p2) < ((this.player.width / 2) + (this.crystal.width / 2))) {
                createjs.Sound.play("score");
                this.scoreboard.score += 100;
                this.crystal.reset();
            }
        };

        // check collision between player and lifeOrb
        Collision.prototype.playerAndLifeorb = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = this.lifeOrb.image.x;
            p2.y = this.lifeOrb.image.y;
            if (this.distance(p1, p2) < ((this.player.width / 2) + (this.lifeOrb.width / 2))) {
                createjs.Sound.play("life");
                this.scoreboard.lives += 1;
                this.lifeOrb.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.HAZARDS_NUM; count++) {
                this.playerAndHazard(this.hazards[count]);
            }
            this.playerAndCrystal();
            this.playerAndLifeorb();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
