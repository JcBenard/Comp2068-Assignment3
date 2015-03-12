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

var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

//game objects
var snake: objects.Snake;
var mines: objects.Mine[] = [];
var background: objects.Background;
var tank: objects.Tank;
var info: objects.InfoBar;
var scoreText: createjs.Text;

//game variables
var difficulty: number = 1;
var score: number = 0;
var scoreDelay = 6;

// asset manifest - array of asset objects
var manifest = [
    { id: "mine", src: "assets/images/mine.png" },
    { id: "background", src: "assets/images/background.png" },
    { id: "tank", src: "assets/images/tank.png" },
    { id: "info", src: "assets/images/infoBar.png" },
    { id: "star", src: "assets/images/star.png" },
    { id: "snake", src: "assets/images/snake.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" }
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

//ultilites methods/////////////////////////////////////////////////////////////////////////
function setupStats() {
    stats.setMode(0);
    document.body.appendChild(stats.domElement);
}

//calculate the distance between two points
function distance(p1: createjs.Point, p2: createjs.Point): number {

    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y),2)));
}

function snakeAndMine(mine: objects.Mine) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = snake.x;
    p1.y = snake.y;
    p2.x = mine.x;
    p2.y = mine.y;

    if (distance(p1, p2) < ((snake.width * .5) + (mine.width * .5))) {
        if (mine.isColliding) {
            createjs.Sound.play("yay");
            mine.isColliding = true;
        }
    } else {
        mine.isColliding = false;
    }
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
        snakeAndMine(mines[index]);
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

    createjs.Sound.play("engine", { loop: -1 });
}