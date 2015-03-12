module objects {

    export class Tank extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("tank");           

            this._dy = 1;

            this.x = 35;
            this.y = 220;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(playerY: number) {

            if (this.y > playerY) {
                this.y -= this._dy;
                this.rotation = -3;
                switch (true) {
                    case (this.y > playerY + 75):
                        this.rotation = -10;
                    case (this.y > playerY + 150):
                        this.rotation = -15;
                    case (this.y > playerY + 225):
                        this.rotation = -20;
                    case (this.y > playerY + 300):
                        this.rotation = -23;
                }
            } else if (this.y < playerY) {
                this.y += this._dy;
                this.rotation = 3;
                switch (true) {
                    case (this.y < playerY - 75):
                        this.rotation = 10;
                    case (this.y < playerY - 150):
                        this.rotation = 15;
                    case (this.y < playerY - 225):
                        this.rotation = 20;
                    case (this.y < playerY - 300):
                        this.rotation = 23;
                }
            }
        }
    }
}  