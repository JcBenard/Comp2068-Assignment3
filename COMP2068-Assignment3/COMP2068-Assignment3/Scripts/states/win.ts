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

module states {
    export class Win {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public scoreText: objects.Label;
        public gameBackground: objects.GameBackground;
        public winBackground: objects.TransitionBackground;
        public tank: objects.Tank;
        public info: objects.InfoBar;
        public healthBar: objects.HealthBar[] = [];
        public difficultyStar: objects.Star[] = [];
        public explosions: objects.Explosion[] = [];
        

        public difficulty: number = 1;
        public score: number = 0;
        public ticks = 0;
        public health = constants.PLAYER_HEALTH;

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
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

            //create and add the parts of the health bar to the game
            for (var index = 0; index < finalHealth; index++) {
                this.healthBar[index] = new objects.HealthBar(index);
                this.game.addChild(this.healthBar[index]);
            }

            //create the stars for difficulty
            for (var index2 = 0; index2 < 3; index2++) {
                this.difficultyStar[index2] = new objects.Star(index2);
                this.game.addChild(this.difficultyStar[index]);
            }

            //create and add the score field to the game
            this.scoreText = new objects.Label("" + finalScore, 355, 475);
            this.game.addChild(this.scoreText);

            //add all the elements to the stage
            stage.addChild(this.game);
        }//end of constructor

        //updates the game based on the elements
        public update() {

            this.snake.update();
            this.gameBackground.update();
            this.winBackground.update();
        }//end of update
    }//end of play
}  