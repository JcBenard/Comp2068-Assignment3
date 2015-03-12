/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/mine.ts" />
/// <reference path="objects/snake.ts" />
/// <reference path="objects/tank.ts" />
/// <reference path="objects/infobar.ts" />
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
//game objects
var snake;
var mines = [];
var background;
var tank;
var info;
var scoreText;
//game variables
var difficulty = 1;
var score = 0;
var scoreDelay = 6;
// asset manifest - array of asset objects
var manifest = [
    { id: "mine", src: "assets/images/mine.png" },
    { id: "background", src: "assets/images/background.png" },
    { id: "tank", src: "assets/images/tank.png" },
    { id: "info", src: "assets/images/infoBar.png" },
    { id: "star", src: "assets/images/star.png" },
    { id: "snake", src: "assets/images/snake.png" }
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
    main();
}
function setupStats() {
    stats.setMode(0);
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.begin();
    if (scoreDelay == 0) {
        score += 1;
        scoreText.text = "" + score;
        scoreDelay = 6;
    }
    scoreDelay--;
    stage.update(); // Refreshes our stage
    snake.update();
    tank.update(snake.getY());
    background.update();
    for (var index = 10; index > 0; index--) {
        mines[index].update();
    }
    background.update();
    stats.end();
}
// Our Game Kicks off in here
function main() {
    background = new objects.Background();
    stage.addChild(background);
    for (var index = 10; index > 0; index--) {
        mines[index] = new objects.Mine();
        stage.addChild(mines[index]);
    }
    tank = new objects.Tank();
    stage.addChild(tank);
    snake = new objects.Snake();
    stage.addChild(snake);
    info = new objects.InfoBar();
    stage.addChild(info);
    scoreText = new createjs.Text("0", "20px Comic Sans MS", "#ffffff");
    scoreText.x = 355;
    scoreText.y = 475;
    scoreText.textAlign = "right";
    scoreText.textBaseline = "alphabetic";
    stage.addChild(scoreText);
}
//# sourceMappingURL=game.js.map