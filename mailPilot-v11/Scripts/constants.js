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

    // Game Constants
    constants.HAZARDS_NUM = 10;
    constants.OBJECTS_NUM = 0;

    //export var CRYSTALS_NUM: number = 2;
    constants.LABEL_FONT = "30px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.PLAYER_LIVES = 3;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
