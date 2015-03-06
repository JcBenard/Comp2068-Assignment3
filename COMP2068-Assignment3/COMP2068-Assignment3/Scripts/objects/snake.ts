module objects {

    export class Snake extends createjs.Bitmap {

        private _dx = 3;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("snake"));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = 225;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            if (this.y > stage.mouseY + 10) {
                this.y -= this._dx;
            } else if (this.y < stage.mouseY - 10) {
                this.y += this._dx;
            }
            
        }

        public getY() {
            return this.y;
        }
    }
}  