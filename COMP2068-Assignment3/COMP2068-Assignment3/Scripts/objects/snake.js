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
            _super.call(this, assetLoader.getResult("snake"));
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = 200;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Snake.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Snake;
    })(createjs.Bitmap);
    objects.Snake = Snake;
})(objects || (objects = {}));
//# sourceMappingURL=snake.js.map