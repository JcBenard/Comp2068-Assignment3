module objects {

    export class Ration extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("ration");

            this._dx = 3;
            this.soundString = "difficulty";

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x -= this._dx;
        }

        public _reset() {
            this.x = 640;
            this.y = Math.floor(Math.random() * 440);
        }
    }
}   