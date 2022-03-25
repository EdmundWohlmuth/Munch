import { SNAKE_MAX_SPEED } from "./Constants";
import { AssetManager } from "./AssetManager";

export class GameCharacters {
    // -------------------------- states -----------------------------------
    public static STATE_IDLE:number = 0;
    public static STATE_MOVING:number = 1;
    public static STATE_DEAD:number = 2;

    // -------------------- protected variables ----------------------------
    protected stage:createjs.StageGL;

    // -------------------- property variables -----------------------------
    protected _speed:number;
    protected _sprite:createjs.Sprite;
    protected _state:number;

    protected xDisplace:number;
    protected yDisplace:number;

    // -------------------------- constructor ------------------------------
    constructor(stage:createjs.StageGL, assetManager:AssetManager, animation:string) {
        // init
        this._speed = SNAKE_MAX_SPEED;
        this._state = GameCharacters.STATE_IDLE;
        this.stage = stage;
        this.xDisplace = 0;
        this.yDisplace = 0;

        // constructs sprites and position on stage
        this._sprite = assetManager.getSprite("sprites", animation, 300, 300);
    }
     // ------------------------ get/sets -------------------------------
    set speed(value:number) {
        this._speed = value;
    }
    get speed():number {
        return this._speed;
    }
    get state():number {
        return this._state;
    }
    get sprite():createjs.Sprite {
        return this._sprite;
    }

    // ------------------- protected meathod ----------------------------

    protected toRadians(degrees:number):number {
        return degrees * (Math.PI / 180);
    }

    // -------------------- public meathods ------------------------------
    public ShowMe():void {
        this.stage.addChild(this._sprite);
    }

    public hideMe():void {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }

    public rotateMe(degrees:number):void {
        if (this._state == GameCharacters.STATE_DEAD) return;
        this._sprite.rotation = degrees;
    }

    public startMe():void {
        if (this._state == GameCharacters.STATE_DEAD) return;

        let radians:number = this.toRadians(this._sprite.rotation);

        this.xDisplace = Math.cos(radians) * this._speed;
        this.yDisplace = Math.sin(radians) * this._speed;

        this._state = GameCharacters.STATE_MOVING;
    }

    public stopMe():void {
        if (this._state == GameCharacters.STATE_DEAD) return;       

        this._sprite.stop();
        this._state = GameCharacters.STATE_IDLE;
    }

    public update():void {
        if ((this._state == GameCharacters.STATE_DEAD) || (this._state == GameCharacters.STATE_IDLE)) return;

        // moves the sprite by x and y displacement
        this._sprite.x += this.xDisplace;
        this._sprite.y += this.yDisplace;

    }
}