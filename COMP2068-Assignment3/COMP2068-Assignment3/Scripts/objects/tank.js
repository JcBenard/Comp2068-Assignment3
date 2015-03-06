var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Tank = (function (_super) {
        __extends(Tank, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Tank() {
            _super.call(this, assetLoader.getResult("tank"));
            this._dy = 1;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = 35;
            this.y = 220;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Tank.prototype.update = function (playerY) {
            if (this.y > playerY) {
                this.y -= this._dy;
            }
            else if (this.y < playerY) {
                this.y += this._dy;
            }
        };
        return Tank;
    })(createjs.Bitmap);
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map