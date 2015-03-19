/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/healthbar.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/mine.ts" />
/// <reference path="../objects/ration.ts" />
/// <reference path="../objects/shell.ts" />
/// <reference path="../objects/snake.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/tank.ts" />
var states;
(function (states) {
    var Play = (function () {
        function Play() {
            this.mines = [];
            this.healthBar = [];
            this.difficultyStar = [];
            this.difficulty = 1;
            this.score = 0;
            this.ticks = 0;
            this.health = constants.PLAYER_HEALTH;
            this.game = new createjs.Container();
            this.background = new objects.Background();
            this.game.addChild(this.background);
            for (var index = constants.MINE_NUM; index > 0; index--) {
                this.mines[index] = new objects.Mine();
                this.game.addChild(this.mines[index]);
            }
            this.ration = new objects.Ration();
            this.game.addChild(this.ration);
            this.tank = new objects.Tank();
            this.game.addChild(this.tank);
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);
            this.shell = new objects.Shell();
            this.game.addChild(this.shell);
            for (var index2 = 0; index2 < this.health; index2++) {
                this.healthBar[index2] = new objects.HealthBar(index2);
                this.game.addChild(this.healthBar[index2]);
            }
            for (var index3 = 0; index3 < 3; index3++) {
                this.difficultyStar[index3] = new objects.Star(index3);
            }
            this.game.addChild(this.difficultyStar[0]);
            this.scoreText = new objects.Label("0", 355, 475);
            this.game.addChild(this.scoreText);
            stage.addChild(this.game);
            createjs.Sound.play("backgroundMusic", { loop: -1 });
        }
        //calculate the distance between two points
        Play.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Play.prototype.checkCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.snake.x;
            p1.y = this.snake.y;
            p2.x = collider.x;
            p2.y = collider.y;
            if (this.distance(p1, p2) < ((this.snake.width * .5) + (collider.width * .5))) {
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    collider.y = constants.SCREEN_HEIGHT;
                    if (collider.name == "mine" || collider.name == "bullet" || collider.name == "shell") {
                        this.health--;
                        this.game.removeChild(this.healthBar[this.health]);
                    }
                    else if (collider.name == "ration" && this.health != 3) {
                        this.game.addChild(this.healthBar[this.health]);
                        this.health++;
                    }
                }
            }
            else {
                collider.isColliding = false;
            }
        };
        Play.prototype.update = function () {
            stats.begin();
            if (this.health < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
            }
            if (this.ticks % 6 == 0) {
                this.score += 1;
                if (this.score == 350) {
                    stage.addChild(this.difficultyStar[1]);
                    this.difficulty = 2;
                    createjs.Sound.play("difficulty");
                }
                if (this.score == 700) {
                    stage.addChild(this.difficultyStar[2]);
                    this.difficulty = 3;
                    createjs.Sound.play("difficulty");
                }
                if (this.score == 1050) {
                }
                this.scoreText.update(this.score);
                if (this.score % 175 == 0) {
                    this.ration.reset();
                }
            }
            if (this.ticks % 90 == 0 && this.difficulty > 1) {
                this.bullet.reset(this.snake.y, this.tank.y);
            }
            if (this.ticks == 180 && this.difficulty > 2) {
                this.shell.reset(this.tank.y, this.tank.rotation);
            }
            this.snake.update();
            this.tank.update(this.snake.getY());
            this.background.update();
            if (this.health > 0) {
                for (var index = constants.MINE_NUM; index > 0; index--) {
                    this.mines[index].update();
                    this.checkCollision(this.mines[index]);
                }
                this.ration.update();
                this.checkCollision(this.ration);
                this.bullet.update();
                this.checkCollision(this.bullet);
                this.shell.update();
                this.checkCollision(this.shell);
            }
            if (this.ticks == 180) {
                this.ticks = 0;
            }
            this.ticks++;
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map