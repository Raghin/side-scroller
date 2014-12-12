/**
Author: Peter Smith
Last Modified by: Peter Smith
Last Modified: November 15, 2014
Description: The constants for the game
**/
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.LEVEL_2 = 3;
    constants.LEVEL_3 = 4;
    constants.PREVIOUS_STATE;

    // Game Constants
    constants.HAZARDS_NUM = 5;
    constants.ENEMIES_NUM = 3;
    constants.CRYSTALS_NUM = 3;
    constants.LABEL_FONT = "25px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.PLAYER_LIVES = 3;
    constants.DIFFICULTY = "";
    constants.COORDINATES = [];
    constants.COORDINATES[0] = 0;
    constants.COORDINATES[1] = 74;
    constants.COORDINATES[2] = 148;
    constants.COORDINATES[3] = 222;
    constants.COORDINATES[4] = 296;
    constants.COORDINATES[5] = 370;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
