﻿/**
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
    export var LEVEL_2: number = 3;
    export var LEVEL_3: number = 4;
    export var PREVIOUS_STATE: number;

    // Game Constants
    export var HAZARDS_NUM: number = 5;
    export var ENEMIES_NUM: number = 3;
    //export var CRYSTALS_NUM: number = 2;
    export var LABEL_FONT = "25px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var PLAYER_LIVES = 3;
    export var DIFFICULTY = "";
    export var COORDINATES = [];
    COORDINATES[0] = 0;
    COORDINATES[1] = 74;
    COORDINATES[2] = 148;
    COORDINATES[3] = 222;
    COORDINATES[4] = 296;
    COORDINATES[5] = 370;

}