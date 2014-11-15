/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The games asset manager, manages all objects in game with convenient id's so as not to repeat long code
**/
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "land", src: "assets/images/background.png" },
        { id: "title", src: "assets/images/title screen logo.png" },
        { id: "overworld", src: "assets/sounds/overworld.mp3" },
        { id: "dead", src: "assets/sounds/Game Over.mp3" },
        { id: "hurt", src: "assets/sounds/hurt.wav" },
        { id: "score", src: "assets/sounds/crystal grab.wav" },
        { id: "life", src: "assets/sounds/orb grab.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [2, 2, 226, 178],
            [230, 2, 211, 69],
            [443, 69, 62, 63],
            [230, 73, 211, 69],
            [230, 144, 211, 69]
        ],
        "animations": {
            "cloud": [0],
            "instructionsButton": [1],
            "island": [2],
            "playButton": [3],
            "tryAgainButton": [4]
        }
    };

    //character sprite sheet data object
    var characterSheetData = {
        "images": ["assets/images/character atlas.png"],
        "frames": [
            [2, 64, 31, 32],
            [31, 64, 31, 32],
            [60, 64, 31, 32]
        ],
        "animations": {
            "frame 1": [0],
            "frame 2": [1],
            "frame 3": [2]
        }
    };

    //hazard sprite sheet data object
    var hazardsSheetData = {
        "images": ["assets/images/hazards.png"],
        "frames": [
            [28, 290, 67, 31],
            [27, 350, 69, 35],
            [222, 34, 31, 59],
            [155, 29, 38, 68],
            [92, 65, 33, 29]
        ],
        "animations": {
            "hor pit": [0],
            "hor firepit": [1],
            "vert pit": [2],
            "vert firepit": [3],
            "stones": [4]
        }
    };

    //collectible sprite sheet data object
    var collectablesSheetData = {
        "images": ["assets/images/collectables.png"],
        "frames": [
            [94, 63, 27, 30],
            [24, 29, 36, 32]
        ],
        "animations": {
            "life orb": [0],
            "crystal": [1]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.character = new createjs.SpriteSheet(characterSheetData);
            this.collectables = new createjs.SpriteSheet(collectablesSheetData);
            this.hazards = new createjs.SpriteSheet(hazardsSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
