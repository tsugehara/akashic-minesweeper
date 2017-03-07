"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("./MineSweeper");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(game, config) {
        var _this = _super.call(this, {
            game: game,
            assetIds: ["open_cell", "close_cell"]
        }) || this;
        _this.config = config ? config : {
            width: 10,
            height: 10,
            mine: 10,
            seed: 0
        };
        _this.gameStateChanged = new g.Trigger();
        _this.mineSweeper = null;
        _this.loaded.handle(_this, _this.onLoaded);
        return _this;
    }
    GameScene.prototype.onGameStateChanged = function (state) {
        this.gameStateChanged.fire(state);
    };
    GameScene.prototype.onLoaded = function () {
        this.mineSweeper = new m.MineSweeper(this.config, this);
        this.mineSweeper.gameStateChanged.handle(this, this.onGameStateChanged);
        return false;
    };
    return GameScene;
}(g.Scene));
exports.GameScene = GameScene;
