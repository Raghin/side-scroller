/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: The games asset manager, manages all objects in game with convenient id's so as not to repeat long code
**/

module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "intro", src: "assets/images/start screen.png" },
        { id: "outro", src: "assets/images/game over.jpg" },
        { id: "title", src: "assets/images/title logo.png" },
        { id: "end", src: "assets/images/ending logo.png" },
        { id: "points", src: "assets/images/score.png" },
        { id: "land", src: "assets/images/plains.png" },
        { id: "desert", src: "assets/images/desert.png" },
        { id: "wasteland", src: "assets/images/wasteland.png" },
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
            [230, 73, 211, 69],
            [230, 144, 211, 69],
            [6, 0, 211, 69],
            [6, 67, 211, 69],
            [6, 141, 211, 69],
            [230, 0, 211, 69]
        ],
        "animations": {
            "playButton": [0],
            "tryAgainButton": [1],
            "easyButton": [2],
            "mediumButton": [3],
            "hardButton": [4],
            "mainMenuButton": [5]
        }
    }

    var extraButtonSheetData = {
        "images": ["assets/images/atlas2.png"],
        "frames": [
            [230, 73, 211, 69],
            [230, 144, 211, 69],
            [6, 0, 211, 69],
            [6, 67, 211, 69],
            [6, 141, 211, 69],
            [230, 0, 211, 69]
        ],
        "animations": {
            "backButton": [0],
            "blank2": [1],
            "instructionsButton": [2],
            "hazardsButton": [3],
            "enemiesButton": [4],
            "collectablesButton": [5]
        }
    }

    //character sprite sheet data object
    var characterSheetData = {
        "images": ["assets/images/character atlas.png"],
        "frames": [
            [5, 65, 22, 30],
            [37, 64, 22, 31],
            [69, 65, 22, 30]
        ],
        "animations": {
            "frame 1": [0],
            "frame 2": [1],
            "frame 3": [2],
            "character": {
                frames: [0, 1, 2],
                speed: 0.1
            }
        }
    }

    //character sprite sheet data object
    var thiefSheetData = {
        "images": ["assets/images/thief atlas.png"],
        "frames": [
            [4, 33, 24, 31],
            [36, 31, 26, 32],
            [68, 33, 26, 31]
        ],
        "animations": {
            "thief": {
                frames: [0, 1, 2],
                speed: 0.15
            }
        }
    }

    var mageSheetData = {
        "images": ["assets/images/mage.png"],
        "frames": [
            [4, 33, 24, 31],
            [36, 31, 26, 32],
            [68, 33, 26, 31]
        ],
        "animations": {
            "mage": {
                frames: [0, 1, 2],
                speed: 0.15
            }
        }
    }

    //hazard sprite sheet data object
    var hazardsSheetData = {
        "images": ["assets/images/hazards.png"],
        "frames": [
            [33, 289, 58, 29],
            [28, 351, 62, 32],
            [224, 34, 26, 59],
            [157, 34, 34, 61],
            [93, 65, 29, 26]
        ],
        "animations": {
            "hor pit": [0],
            "hor firepit": [1],
            "vert pit": [2],
            "vert firepit": [3],
            "stones": [4]
        }
    }

    //collectible sprite sheet data object
    var collectablesSheetData = {
        "images": ["assets/images/collectables.png"],
        "frames": [
            [97, 63, 27, 22],
            [26, 29, 33, 30],
            [70, 13, 20, 23],
            [115, 13, 20, 23]
        ],
        "animations": {
            "life orb": [0],
            "crystal": [1],
            "red gem": [2],
            "blue gem": [3]
        }
        
    }

    //players weapons sprite sheet
    var weaponsSheetData = {
        "images": ["assets/images/weapons.png"],
        "frames": [
            [70, 58, 28, 45],
            [56, 21, 110, 13]
        ],
        "animations": {
            "axe": [0],
            "spear": [1]
        }
    }

    //fireball explosion sprite sheet
    var explosionSheetData = {
        "images": ["assets/images/explosion.png"],
        "frames": [
            [0, 39, 43, 45],
            [61, 40, 50, 47],
            [130, 41, 44, 45],
            [203, 36, 36, 44],
        ],
        "animations": {
            "explosion": {
                frames: [0, 1, 2, 3],
                speed: 0.15
            }
        }
    }

    //firebal sprite sheet
    var fireballSheetData = {
        "images": ["assets/images/fireball.png"],
        "frames": [
            [1, 22, 52, 17],
            [65, 22, 53, 16],
            [128, 22, 55, 17],
            [194, 23, 55, 16],
        ],
        "animations": {
            "fireball": {
                frames: [0, 1, 2, 3],
                speed: 0.15
            }
        }
    }

    // BitMap Font SpriteSheet Data object
    var bitMapFontData = {
        "images": ["assets/fonts/fontAtlas.png"],
        "frames": [

            [2, 169, 83, 82],
            [768, 166, 32, 81],
            [218, 168, 60, 83],
            [585, 87, 61, 82],
            [307, 85, 68, 81],
            [651, 166, 57, 82],
            [154, 169, 62, 82],
            [525, 170, 58, 81],
            [87, 169, 65, 82],
            [337, 170, 62, 81],
            [275, 2, 82, 81],
            [518, 87, 65, 81],
            [523, 2, 75, 83],
            [600, 2, 75, 80],
            [401, 170, 61, 81],
            [464, 170, 59, 81],
            [2, 84, 83, 83],
            [234, 86, 71, 80],
            [802, 166, 26, 80],
            [713, 84, 61, 80],
            [87, 86, 71, 81],
            [776, 84, 52, 80],
            [442, 2, 79, 80],
            [377, 84, 70, 80],
            [191, 2, 82, 82],
            [648, 84, 63, 80],
            [106, 2, 83, 82],
            [585, 171, 64, 80],
            [280, 168, 55, 83],
            [710, 166, 56, 80],
            [449, 84, 67, 80],
            [359, 2, 81, 80],
            [2, 2, 102, 80],
            [677, 2, 75, 80],
            [754, 2, 73, 80],
            [160, 86, 72, 80]
        ],
        "animations": {

            "0": [0],
            "1": [1],
            "2": [2],
            "3": [3],
            "4": [4],
            "5": [5],
            "6": [6],
            "7": [7],
            "8": [8],
            "9": [9],
            "a": [10],
            "b": [11],
            "c": [12],
            "d": [13],
            "e": [14],
            "f": [15],
            "g": [16],
            "h": [17],
            "i": [18],
            "j": [19],
            "k": [20],
            "l": [21],
            "m": [22],
            "n": [23],
            "o": [24],
            "p": [25],
            "q": [26],
            "r": [27],
            "s": [28],
            "t": [29],
            "u": [30],
            "v": [31],
            "w": [32],
            "x": [33],
            "y": [34],
            "z": [35]
        }
    };

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static atlas2: createjs.SpriteSheet;
        public static character: createjs.SpriteSheet;
        public static collectables: createjs.SpriteSheet;
        public static hazards: createjs.SpriteSheet;
        public static thief: createjs.SpriteSheet;
        public static mage: createjs.SpriteSheet;
        public static weapons: createjs.SpriteSheet;
        public static explosion: createjs.SpriteSheet;
        public static fireball: createjs.SpriteSheet;
        public static bitMapFont: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.atlas2 = new createjs.SpriteSheet(extraButtonSheetData);
            this.character = new createjs.SpriteSheet(characterSheetData);
            this.collectables = new createjs.SpriteSheet(collectablesSheetData);
            this.hazards = new createjs.SpriteSheet(hazardsSheetData);
            this.thief = new createjs.SpriteSheet(thiefSheetData);
            this.mage = new createjs.SpriteSheet(mageSheetData);
            this.weapons = new createjs.SpriteSheet(weaponsSheetData);
            this.explosion = new createjs.SpriteSheet(explosionSheetData);
            this.fireball = new createjs.SpriteSheet(fireballSheetData);
            this.bitMapFont = new createjs.SpriteSheet(bitMapFontData);
        }

    }
} 