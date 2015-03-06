module objects {

    export class Snake extends createjs.Bitmap {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(assetLoader.getResult("snake"));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = 200;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.y = stage.mouseY;
        }
    }
}  