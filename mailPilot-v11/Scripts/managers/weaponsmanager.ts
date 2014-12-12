/// <reference path="../objects/player.ts" />
/// <reference path="../objects/weapons.ts" />
/**
module managers {
    export class weaponsManager {
        game: createjs.Container;
        stage: createjs.Stage;
        player: objects.player;
        weaponArray = [];
        weaponCount: number = 0;
        throwing: boolean = false;
        constructor(player: objects.player, game: createjs.Container, stage: createjs.Stage) {
            this.game = game;
            this.player = player;
            this.stage = stage;
        }

        toss(weap: string) {
            // throw an axe
            var throwed: objects.weapons = new objects.weapons(this.stage, this.game, weap);

            //this.game.addChild(throwed);
            throwed.image.x = this.player.image.x + 40;
            throwed.image.y = this.player.image.y;
        } // end toss

        update() {
            var len: number = this.weaponArray.length;
            var weapon: objects.weapons;

            for (var count = len - 1; count >= 0; count--) {
                weapon = this.weaponArray[count];
                // move current bullet up stage
                weapon.image.x -= 25;
                // check to see if the bullet has left the stage
                if (weapon.image.x > 550) {
                    this.destroyBullet(weapon);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if ((this.throwing == true) && (this.weaponCount % 10 == 0)) {
                if (this.player.onStage == true) {
                    this.toss();
                }
            }
            //increment bullet count to limit number of bullets being fired
            this.weaponCount++;
        } // end update

        destroyBullet(weapon: objects.weapons) {
            var len: number = this.weaponArray.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.weaponArray[count] == weapon) {
                    this.weaponArray.splice(count, 1);
                    //this.game.removeChild(weapon);
                }
            }
        } // end destroyBullet
    }
} 
**/