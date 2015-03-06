var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Snake = (function (_super) {
        __extends(Snake, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Snake() {
            _super.call(this, new createjs.SpriteSheet({
                images: [assetLoader.getResult("snake")],
                frames: { width: 39, height: 70 },
                // define two animations, run (loops, 1.5x speed) and jump (returns to run):
                animations: {
                    run: {
                        frames: [0, 1, 2, 1],
                        speed: 0.12
                    }
                }
            }), "run");
            this._dx = 3;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = 225;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Snake.prototype.update = function () {
            if (this.y > stage.mouseY + 10) {
                this.y -= this._dx;
            }
            else if (this.y < stage.mouseY - 10) {
                this.y += this._dx;
            }
        };
        Snake.prototype.getY = function () {
            return this.y;
        };
        return Snake;
    })(createjs.Sprite);
    objects.Snake = Snake;
})(objects || (objects = {}));
//# sourceMappingURL=snake.js.map