module objects {

    export class Tank extends createjs.Bitmap {

        private _dy = 1;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("tank"));           

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = 35;
            this.y = 220;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(playerY: number) {

            if (this.y > playerY) {
                this.y -= this._dy;
            } else if (this.y < playerY) {
                this.y += this._dy;
            }
        }
    }
}  