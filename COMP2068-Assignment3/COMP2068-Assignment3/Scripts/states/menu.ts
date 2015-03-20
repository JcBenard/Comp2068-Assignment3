/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />

module states {
    export class Menu {

        public game: createjs.Container;
        public background: createjs.Bitmap;
        public startButton: objects.Button;
        public instructionsButton: objects.Button;

        constructor() {
            this.game = new createjs.Container();

            this.background = new createjs.Bitmap(assetLoader.getResult("menuBackground"));
            this.game.addChild(this.background);

            this.startButton = new objects.Button("startButton", constants.SCRREN_CENTER_WIDTH, constants.SCRREN_CENTER_HEIGHT);
            this.game.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClicked, this);

            this.instructionsButton = new objects.Button("instructionsButton", constants.SCRREN_CENTER_WIDTH, (constants.SCRREN_CENTER_HEIGHT + 75));
            this.game.addChild(this.instructionsButton);
            this.instructionsButton.on("click", this.instructionsButtonClicked, this);

            stage.addChild(this.game);

        }

        public update() {

        }

        private startButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }

        private instructionsButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.INSTRUCTIONS_STATE;
            stateChanged = true;
        }
    }
} 