﻿/// <reference path="../objects/enemies.ts" />
/// <reference path="../objects/hazards.ts" />
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
        function Collision(player, crystal, lifeOrb, hazards, enemy, scoreboard) {
            this.hazards = [];
            this.enemy = [];
            this.crystal = [];
            this.player = player;
            this.crystal = crystal;
            this.lifeOrb = lifeOrb;
            this.hazards = hazards;
            this.scoreboard = scoreboard;
            this.enemy = enemy;
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

        /**
        //check for overlap between items
        private overlap() {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        var p3: createjs.Point = new createjs.Point();
        p1.x = this.crystal.image.x;
        p1.y = this.crystal.image.y;
        p3.x = this.lifeOrb.image.x;
        p3.y = this.lifeOrb.image.y;
        for (var i = 0; i < this.hazards.length; i++) {
        p2.x = this.hazards[i].image.x;
        p2.y = this.hazards[i].image.y;
        if (this.distance(p1, p2) < ((this.crystal.width / 2) + (this.hazards[i].width / 2)) || this.distance(p1, p2) < ((this.crystal.height / 2) + (this.hazards[i].height / 2))) {
        this.crystal.reset();
        }
        else if (this.distance(p2, p3) < ((this.lifeOrb.width / 2) + (this.hazards[i].width / 2)) || this.distance(p2, p3) < ((this.lifeOrb.height / 2) + (this.hazards[i].height / 2))) {
        this.lifeOrb.reset();
        }
        }
        }
        **/
        // checks if 1 hazards are overlapping
        Collision.prototype.hazardCheck = function (hazards) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = hazards.image.x;
            p1.y = hazards.image.y;
            for (var i = 0; i < this.hazards.length; i++) {
                p2.x = this.hazards[i].image.x;
                p2.y = this.hazards[i].image.y;
                if (this.hazards[i] != hazards) {
                    if (this.distance(p1, p2) < ((this.hazards[i].width / 2) + (hazards.width / 2)) || this.distance(p1, p2) < ((this.hazards[i].height / 2) + (hazards.height / 2))) {
                        this.hazards[i].reset();
                        hazards.reset();
                    }
                }
            }
        };

        //checks if the thief hit
        Collision.prototype.playerAndThief = function (enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = enemy.image.x;
            p2.y = enemy.image.y;
            if (this.distance(p1, p2) < ((this.player.width / 2) + (enemy.width / 2))) {
                if (enemy.name == "thief") {
                    createjs.Sound.play("hurt");
                    this.scoreboard.score -= 50;
                    enemy.reset();
                } else if (enemy.name == "mage") {
                    createjs.Sound.play("hurt");
                    this.scoreboard.lives -= 1;
                    enemy.reset();
                }
            }
        };

        // checks the collision betwen player and hazards
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
        Collision.prototype.playerAndCrystal = function (crystal) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.image.x;
            p1.y = this.player.image.y;
            p2.x = crystal.image.x;
            p2.y = crystal.image.y;
            if (this.distance(p1, p2) < ((this.player.width / 2) + (crystal.width / 2))) {
                createjs.Sound.play("score");
                if (crystal.name == "crystal")
                    this.scoreboard.score += 100;
                else if (crystal.name == "red gem")
                    this.scoreboard.score += 150;
                else if (crystal.name == "blue gem")
                    this.scoreboard.score += 200;
                crystal.reset();
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
                //this.hazardCheck(this.hazards[count]);
            }
            for (var count = 0; count < constants.ENEMIES_NUM; count++) {
                this.playerAndThief(this.enemy[count]);
            }
            for (var count = 0; count < constants.CRYSTALS_NUM; count++) {
                this.playerAndCrystal(this.crystal[count]);
            }

            //this.overlap();
            //this.playerAndCrystal();
            this.playerAndLifeorb();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
