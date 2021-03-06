var constants;
(function (constants) {
    //text constants
    constants.FONT_SIZE = "20px";
    constants.FONT_FAMILY = "Arial";
    constants.FONT_COLOR = "#ffffff";
    //screen constants
    constants.SCREEN_WIDTH = 640;
    constants.SCREEN_HEIGHT = 480;
    constants.SCRREN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCRREN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    //game stats constants
    constants.PLAYER_HEALTH = 3;
    constants.MINE_NUM = 10;
    //game state constants
    constants.MENU_STATE = 0;
    constants.INSTRUCTIONS_STATE = 1;
    constants.PLAY_STATE = 2;
    constants.GAME_OVER_STATE = 3;
    constants.WIN_STATE = 4;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map