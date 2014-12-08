/**
    Author: Peter Smith
    Last Modified by: Peter Smith
    Last Modified: November 15, 2014
    Description: The constants for the game
**/

module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;

    // Game Constants
    export var HAZARDS_NUM: number = 10;
    export var OBJECTS_NUM: number = 0;
    //export var CRYSTALS_NUM: number = 2;
    export var LABEL_FONT = "30px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var PLAYER_LIVES = 3;
}