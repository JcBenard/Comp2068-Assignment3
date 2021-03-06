﻿module objects {

    export class Mine extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("mine");

            this._dx = 4;
            this.soundString = "explosion";
            this.name = "mine";
            //set the island to start at a random x and an out of bounds y
            this._reset();
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }

        //set the mine to a random y pos and a random x pos out of screen
        private _reset() {
            this.x = constants.SCREEN_WIDTH + Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);           
        }

        //checks if the mine is passed the screen
        private _checkBounds() {
            if (this.x <= 0) {
                this._reset();
            }
        }
    }
}    