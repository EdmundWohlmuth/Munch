"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Snake.ts":
/*!**********************!*\
  !*** ./src/Snake.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.snake = void 0;
const GameCharacters_1 = __webpack_require__(/*! ./GameCharacters */ "./src/GameCharacters.ts");
class snake extends GameCharacters_1.GameCharacters {
    constructor(stage, assetManager) {
        super(stage, assetManager, "snake/alive");
        this.eventKilled = new createjs.Event("snakeKilled", true, false);
    }
    killMe() {
        this._state = GameCharacters_1.GameCharacters.STATE_DEAD;
        this.stopMe();
        this._sprite.on("animationend", function () {
            this._sprite.stop();
        }, this, true);
        this._sprite.gotoAndPlay("snake/dead");
        this._sprite.dispatchEvent(this.eventKilled);
    }
}
exports.snake = snake;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0a68c95108d0ff266c0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.db8a57ae9dd337e481fb.hot-update.js.map