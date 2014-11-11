var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "ocean", src: "assets/images/ocean.gif" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
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
            [2, 64, 31, 96],
            [31, 64, 60, 96],
            [60, 64, 89, 96]
        ],
        "animations": {
            "frame 1": [0],
            "frame 2": [1],
            "frame 3": [2]
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
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
