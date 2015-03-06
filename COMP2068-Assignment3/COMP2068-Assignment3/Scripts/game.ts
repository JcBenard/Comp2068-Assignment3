/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/mine.ts" />

var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

//game objects
var plane: objects.Plane;
var island: objects.Island;
var mines: objects.Mine[] = [];
var background: objects.Background;

// asset manifest - array of asset objects
var manifest = [
    { id: "mine", src: "assets/images/mine.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "background", src: "assets/images/background.png" },
    { id: "plane", src: "assets/images/plane.png" }
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
    plane.update();
    island.update();
    for (var index = 10; index > 0; index--) {
        mines[index].update();
    }
    background.update();
}

// Our Game Kicks off in here
function main() {
    background = new objects.Background();
    stage.addChild(background);

    island = new objects.Island();
    stage.addChild(island);

    plane = new objects.Plane();
    stage.addChild(plane);

    for (var index = 10; index > 0; index--) {
        mines[index] = new objects.Mine();
        stage.addChild(mines[index]);
    }
}