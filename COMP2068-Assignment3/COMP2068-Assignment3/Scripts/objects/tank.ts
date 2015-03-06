module objects {

    export class Tank extends createjs.Bitmap {

        private _dx = 2;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("tank"));           

            this.x = 10;
            this.y = 220;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            
        }
    }
}  