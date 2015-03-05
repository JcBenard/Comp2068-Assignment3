module objects {

    export class Plane extends createjs.Bitmap {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("plane"));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.y = 430;
            
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x = stage.mouseX;

        }
    }
} 