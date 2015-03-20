/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/gameBackground.ts" />
/// <reference path="objects/mine.ts" />
/// <reference path="objects/snake.ts" />
/// <reference path="objects/tank.ts" />
/// <reference path="objects/infobar.ts" />
/// <reference path="objects/healthbar.ts" />
/// <reference path="objects/star.ts" />
/// <reference path="objects/ration.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/shell.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="states/gameOver.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/menu.ts" />
//game variables
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
//game objects
var gameOver;
var play;
var instructions;
var menu;
var currentState;
var currentStateFunction;
var stateChanged = false;
var finalScore = 0;
var finalDifficulty = 1;
// asset manifest - array of asset objects
var manifest = [
    { id: "mine", src: "assets/images/mine.png" },
    { id: "gameBackground", src: "assets/images/background.png" },
    { id: "tank", src: "assets/images/tank.png" },
    { id: "info", src: "assets/images/infoBar.png" },
    { id: "star", src: "assets/images/star.png" },
    { id: "snake", src: "assets/images/snake.png" },
    { id: "life", src: "assets/images/life.png" },
    { id: "ration", src: "assets/images/ration.png" },
    { id: "bullet", src: "assets/images/bullet.png" },
    { id: "shell", src: "assets/images/shell.png" },
    { id: "menuBackground", src: "assets/images/startBackground.png" },
    { id: "startButton", src: "assets/images/startButton.png" },
    { id: "instructionsButton", src: "assets/images/instructionsButton.png" },
    { id: "backgroundMusic", src: "assets/audio/backgroundMusic.ogg" },
    { id: "difficulty", src: "assets/audio/difficultyUp.ogg" },
    { id: "explosion", src: "assets/audio/Explosion.wav" }
];
// Game Objects 
function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
//ultilites methods/////////////////////////////////////////////////////////////////////////
function setupStats() {
    stats.setMode(0);
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.begin();
    if (stateChanged) {
        changeState(currentState);
    }
    currentStateFunction.update();
    stage.update();
    stats.end();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            stateChanged = false;
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.INSTRUCTIONS_STATE:
            stateChanged = false;
            instructions = new states.Instructions();
            currentStateFunction = instructions;
            break;
        case constants.PLAY_STATE:
            stateChanged = false;
            play = new states.Play();
            currentStateFunction = play;
            break;
        case constants.GAME_OVER_STATE:
            stateChanged = false;
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }
}
//# sourceMappingURL=game.js.map