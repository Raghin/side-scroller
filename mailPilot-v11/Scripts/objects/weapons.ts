/// <reference path="../managers/asset.ts" />

// weapon Class
module objects {
    export class weapons {
        image: createjs.Sprite;
        name;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container, weap: string) {
            this.image = new createjs.Sprite(managers.Assets.weapons, (this.name = weap));
            this.stage = stage;
            this.game = game;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }
} 