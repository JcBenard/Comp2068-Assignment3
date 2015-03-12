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
                this.rotation = -5;
                switch (true) {
                    case (this.y > playerY + 75):
                        this.rotation = -10;
                    case (this.y > playerY + 150):
                        this.rotation = -15;
                    case (this.y > playerY + 225):
                        this.rotation = -20;
                    case (this.y > playerY + 300):
                        this.rotation = -23;
                }
            } else if (this.y < playerY) {
                this.y += this._dy;
                this.rotation = 5;
                switch (true) {
                    case (this.y < playerY - 75):
                        this.rotation = 10;
                    case (this.y < playerY - 150):
                        this.rotation = 15;
                    case (this.y < playerY - 225):
                        this.rotation = 20;
                    case (this.y < playerY - 300):
                        this.rotation = 23;
                }
            }
        }
    }
}  