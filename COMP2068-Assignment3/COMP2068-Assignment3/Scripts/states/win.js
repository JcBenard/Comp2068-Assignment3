/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/gameBackground.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/healthbar.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/mine.ts" />
/// <reference path="../objects/antiTank.ts" />
/// <reference path="../objects/ration.ts" />
/// <reference path="../objects/shell.ts" />
/// <reference path="../objects/snake.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/transitionbackground.ts" />
/// <reference path="../objects/explosion.ts" />
var states;
(function (states) {
    var Win = (function () {
        //constructor///////////////////////////////////////////////////////////////////////
        function Win() {
            this.healthBar = [];
            this.difficultyStar = [];
            this.explosions = [];
            this.difficulty = 1;
            this.score = 0;
            this.ticks = 0;
            this.health = constants.PLAYER_HEALTH;
            this.game = new createjs.Container();
            //create and add the normal game background to the game
            this.gameBackground = new objects.GameBackground();
            this.game.addChild(this.gameBackground);
            //create and add the tank to the game
            this.tank = new objects.Tank();
            this.game.addChild(this.tank);
            for (var index3 = 0; index3 < 10; index3++) {
                this.explosions[index3] = new objects.Explosion();
                this.game.addChild(this.explosions[index3]);
            }
            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);
            this.snake.y = finalAvaterY;
            //create add add the gameover background to the game
            this.winBackground = new objects.TransitionBackground("winBackground", 1.75, 250);
            this.game.addChild(this.winBackground);
            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            for (var index = 0; index < finalHealth; index++) {
                this.healthBar[index] = new objects.HealthBar(index);
                this.game.addChild(this.healthBar[index]);
            }
            for (var index2 = 0; index2 < 3; index2++) {
                this.difficultyStar[index2] = new objects.Star(index2);
                this.game.addChild(this.difficultyStar[index]);
            }
            //create and add the score field to the game
            this.scoreText = new objects.Label("" + finalScore, 355, 475);
            this.game.addChild(this.scoreText);
            //add all the elements to the stage
            stage.addChild(this.game);
        } //end of constructor
        //updates the game based on the elements
        Win.prototype.update = function () {
            this.snake.update();
            this.gameBackground.update();
            this.winBackground.update();
        }; //end of update
        return Win;
    })();
    states.Win = Win; //end of play
})(states || (states = {}));
//# sourceMappingURL=win.js.map