module objects {

    export class Ocean extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dy = 5;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("ocean"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            //set the island to start at a random x and an out of bounds y
            this._reset();

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.y += this._dy;

            this._checkBounds();
        }

        private _reset() {
            this.x = 0;
            this.y = 960;
        }

        private _checkBounds() {
            if (this.y >= 0) {
                this._reset();
            }
        }
    }
}   