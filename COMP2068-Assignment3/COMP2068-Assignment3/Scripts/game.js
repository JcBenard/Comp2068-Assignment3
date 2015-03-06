/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/mine.ts" />
/// <reference path="objects/snake.ts" />
/// <reference path="objects/tank.ts" />
var canvas;
var stage;
var assetLoader;
//game objects
var snake;
var mines = [];
var background;
var tank;
// asset manifest - array of asset objects
var manifest = [
    { id: "mine", src: "assets/images/mine.png" },
    { id: "background", src: "assets/images/background.png" },
    { id: "tank", src: "assets/images/tank.png" },
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
    main();
}
function gameLoop() {
    stage.update(); // Refreshes our stage
    snake.update();
    tank.update(snake.getY());
    background.update();
    for (var index = 10; index > 0; index--) {
        mines[index].update();
    }
    background.update();
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
}
//# sourceMappingURL=game.js.map