"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var m = require("./MineSweeper");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(param, config) {
        var _this = _super.call(this, param) || this;
        _this.config = config ? config : {
            width: 10,
            height: 10,
            mine: 10,
            seed: 0
        };
        _this.gameStateChanged = new g.Trigger();
        _this.mineSweeper = new m.MineSweeper(config, _this);
        _this.mineSweeper.gameStateChanged.handle(_this, _this.onGameStateChanged);
        return _this;
    }
    GameScene.prototype.onGameStateChanged = function (state) {
        this.gameStateChanged.fire(state);
    };
    return GameScene;
}(g.Scene));
exports.GameScene = GameScene;
