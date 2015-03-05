module objects {

    export class Cloud extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dy;
        private _dx;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("cloud"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //set the island to start at a random x and an out of bounds y
            this._reset();

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.y += this._dy;
            this.x += this._dx;

            this._checkBounds();
        }

        private _reset() {
            this.x = Math.floor(Math.random() * 640);
            this.y = -this.height;
            this._dy = Math.floor((Math.random() * 5) + 5);
            this._dx = Math.floor((Math.random() * 4) - 2);
        }

        private _checkBounds() {
            if (this.y > (480 + this.height)) {
                this._reset();
            }
        }
    }
}   