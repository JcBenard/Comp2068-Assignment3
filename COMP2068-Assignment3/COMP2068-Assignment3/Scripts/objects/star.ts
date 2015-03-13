module objects {

    export class Star extends createjs.Bitmap {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(barNumber: number) {

            super(assetLoader.getResult("star"));

            this.x = 136 + (25 * barNumber);
            this.y = 462;
        }
    }
}   