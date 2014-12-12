/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />

/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: The button handlers
**/
module objects {
    export class helpButton extends createjs.Sprite {
        constructor(x:number, y:number, buttonIDString: string) {
            super(managers.Assets.atlas2, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 