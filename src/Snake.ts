import { GameCharacters } from "./GameCharacters";
import { AssetManager } from "./AssetManager";

export class Snake extends GameCharacters {
    // custom event for dispatching
    private eventKilled:createjs.Event;
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager, "snake/alive");
        // construct custom event objects
        this.eventKilled = new createjs.Event("snakeKilled", true, false);
    }
     // --------------------------------------------------- public methods
    public killMe():void {
        // snake is now killed!
        this._state = GameCharacters.STATE_DEAD;
        // stop the snake's sprite animation
        this.stopMe();
        // listen for animation to be finished (auto removes event listener)
        this._sprite.on("animationend", function() {
            // cleanup
            this._sprite.stop();
        }, this, true);
        // play the snake's death animation
        this._sprite.gotoAndPlay("snake/dead");
        // dispatch event that snake has been killed!
        this._sprite.dispatchEvent(this.eventKilled);
    }       
}