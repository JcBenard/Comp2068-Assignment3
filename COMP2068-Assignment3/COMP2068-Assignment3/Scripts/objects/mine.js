var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Mine = (function (_super) {
        __extends(Mine, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Mine() {
            _super.call(this, assetLoader.getResult("mine"));
            //private instanced variables
            this._dx = 2;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //set the island to start at a random x and an out of bounds y
            this._reset();
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Mine.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Mine.prototype._reset = function () {
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        };
        Mine.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        return Mine;
    })(createjs.Bitmap);
    objects.Mine = Mine;
})(objects || (objects = {}));
//# sourceMappingURL=mine.js.map