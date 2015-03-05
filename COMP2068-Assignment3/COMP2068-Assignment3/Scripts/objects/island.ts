module objects {

    export class Island extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dy = 5;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("island"));

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

            this._checkBounds();
        }

        private _reset() {
            this.x = Math.floor(Math.random() * 640);
            this.y = -this.height;
        }

        private _checkBounds() {
            if (this.y > (480 + this.height)) {
                this._reset();
            }
        }
    }
}  