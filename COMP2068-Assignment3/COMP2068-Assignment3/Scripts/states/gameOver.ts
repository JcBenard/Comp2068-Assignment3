/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/star.ts" />

module states {
    export class GameOver {

        public game: createjs.Container;
        public background: createjs.Bitmap;
        public reStartButton: objects.Button;
        public info: objects.InfoBar;
        public difficultyStar: objects.Star[] = [];
        public scoreText: objects.Label;

        constructor() {
            this.game = new createjs.Container();

            //this.background = new createjs.Bitmap(assetLoader.getResult("overBackground"));
            //this.game.addChild(this.background);

            this.reStartButton = new objects.Button("startButton", constants.SCRREN_CENTER_WIDTH, constants.SCRREN_CENTER_HEIGHT);
            this.game.addChild(this.reStartButton);
            this.reStartButton.on("click", this.reStartButtonClicked, this);

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            //create the stars for difficulty
            for (var index = 0; index < finalDifficulty; index++) {
                this.difficultyStar[index] = new objects.Star(index);
                this.game.addChild(this.difficultyStar[index]);
            }           

            //create and add the score field to the game
            this.scoreText = new objects.Label(finalScore.toString(), 355, 475);
            this.game.addChild(this.scoreText);

            stage.addChild(this.game);

        }

        public update() {

        }

        private reStartButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }
    }
} 