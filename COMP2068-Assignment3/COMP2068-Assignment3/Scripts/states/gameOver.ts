﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/snakedeath.ts" />
/// <reference path="../objects/gamebackground.ts" />
/// <reference path="../objects/transitionbackground.ts" />
/// <reference path="../objects/tank.ts" />

module states {
    export class GameOver {

        //public instanced variables///////////////////////////////////////////////////////////////////////
        public game: createjs.Container;
        public gamebackground: createjs.Bitmap;
        public overBackground: objects.TransitionBackground;
        public snake: objects.SnakeDeath;
        public reStartButton: objects.Button;
        public info: objects.InfoBar;
        public difficultyStar: objects.Star[] = [];
        public scoreText: objects.Label;

        private haveButton: boolean = false;

        //constructor/////////////////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //create and add the normal game background to the game
            this.gamebackground = new createjs.Bitmap(assetLoader.getResult("gameBackground"));
            this.game.addChild(this.gamebackground);

            //create and add the player charater with death animation to the game
            this.snake = new objects.SnakeDeath();
            this.game.addChild(this.snake);

            //create add add the gameover background to the game
            this.overBackground = new objects.TransitionBackground("overBackground", 1.75, 0);
            this.game.addChild(this.overBackground);          

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            //create and add the stars for difficulty
            for (var index = 0; index < finalDifficulty; index++) {
                this.difficultyStar[index] = new objects.Star(index);
                this.game.addChild(this.difficultyStar[index]);
            }           

            //create the restart button to the game
            this.reStartButton = new objects.Button("restartButton", constants.SCRREN_CENTER_WIDTH, constants.SCRREN_CENTER_HEIGHT + 40);           
            //add an on click handler for the button
            this.reStartButton.on("click", this.reStartButtonClicked, this);

            //create and add the score field to the game
            this.scoreText = new objects.Label("" + finalScore.toString(), 355, 475);
            this.game.addChild(this.scoreText);

            stage.addChild(this.game);

            //start the background music
            createjs.Sound.play("gameOver");
        }

        //public methods///////////////////////////////////////////////////////////////////////////////////////
        public update() {
            //update the gameover background so it can transition
            this.overBackground.update();

            //if the gameover background has stopped transtioning add the restart button
            if (this.overBackground.x <= 0 && this.haveButton == false) {
                this.game.addChild(this.reStartButton);
                this.haveButton = true;
            }
        }

        //private methods/////////////////////////////////////////////////////////////////////////////////////
        //if they click the reStart button
        private reStartButtonClicked() {
            //clear the game then change the state to play
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }
    }
} 