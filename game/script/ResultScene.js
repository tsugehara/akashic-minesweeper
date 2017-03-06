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
var ResultScene = (function (_super) {
    __extends(ResultScene, _super);
    function ResultScene(game, isClear, gameScene) {
        var _this = _super.call(this, {
            game: game,
            assetIds: ["clear", "gameover"]
        }) || this;
        _this.gameSprite = g.Util.createSpriteFromScene(_this, gameScene);
        _this.isClear = isClear;
        _this.pointDownCapture.handle(_this, _this.onPointDownCapture);
        _this.loaded.handle(_this, _this.onLoaded);
        return _this;
    }
    ResultScene.prototype.onPointDownCapture = function () {
        this.end();
    };
    ResultScene.prototype.onLoaded = function () {
        var assetId = this.isClear ? "clear" : "gameover";
        var asset = this.assets[assetId];
        this.append(this.gameSprite);
        new g.Sprite({
            scene: this,
            x: (this.game.width - asset.width) / 2,
            y: (this.game.height - asset.height) / 2,
            width: asset.width,
            height: asset.height,
            src: asset,
            parent: this
        });
    };
    return ResultScene;
}(g.Scene));
exports.ResultScene = ResultScene;
