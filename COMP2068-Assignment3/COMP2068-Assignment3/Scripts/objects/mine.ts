module objects {

    export class Mine extends createjs.Bitmap {
        //public instanced variables
        public width: number;
        public height: number;
        public isColliding: boolean = false;

        //private instanced variables
        private _dx = 2;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("mine"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //set the island to start at a random x and an out of bounds y
            this._reset();

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }

        private _reset() {
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 440);           
        }

        private _checkBounds() {
            if (this.x <= 0) {
                this._reset();
            }
        }
    }
}    