/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/star.ts" />
var states;
(function (states) {
    var GameOver = (function () {
        //constructor/////////////////////////////////////////////////////////////////////////////////
        function GameOver() {
            this.difficultyStar = [];
            this.game = new createjs.Container();
            //create and add the background to the game
            this.background = new createjs.Bitmap(assetLoader.getResult("overBackground"));
            this.game.addChild(this.background);
            //create and add the restart button to the game
            this.reStartButton = new objects.Button("restartButton", constants.SCRREN_CENTER_WIDTH, constants.SCRREN_CENTER_HEIGHT + 40);
            this.game.addChild(this.reStartButton);
            //add an on click handler for the button
            this.reStartButton.on("click", this.reStartButtonClicked, this);
            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            for (var index = 0; index < finalDifficulty; index++) {
                this.difficultyStar[index] = new objects.Star(index);
                this.game.addChild(this.difficultyStar[index]);
            }
            //create and add the score field to the game
            this.scoreText = new objects.Label("" + finalScore.toString(), 355, 475);
            this.game.addChild(this.scoreText);
            stage.addChild(this.game);
        }
        //public methods///////////////////////////////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        GameOver.prototype.update = function () {
        };
        //private methods/////////////////////////////////////////////////////////////////////////////////////
        //if they click the reStart button
        GameOver.prototype.reStartButtonClicked = function () {
            //clear the game then change the state to play
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameOver.js.map