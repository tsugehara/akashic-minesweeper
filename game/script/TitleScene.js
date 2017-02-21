"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spinner_1 = require("./Spinner");
var GameScene_1 = require("./GameScene");
var ResultScene_1 = require("./ResultScene");
var MineSweeper_1 = require("./MineSweeper");
// なぜかこれがシーン遷移を全部知ってるクラスになってる
var TitleScene = (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene(game) {
        var _this = _super.call(this, {
            game: game,
            assetIds: ["start"]
        }) || this;
        var glyphData = JSON.parse(_this.game.assets["glyph"].data);
        _this.font = new g.BitmapFont(_this.game.assets["number"], glyphData.map, glyphData.width, glyphData.height, glyphData.missingGlyph);
        _this.spinner = null;
        _this.start = null;
        _this.loaded.handle(_this, _this.onLoaded);
        return _this;
    }
    TitleScene.prototype.onLoaded = function () {
        var startImage = this.assets["start"];
        this.start = new g.Sprite({
            scene: this,
            src: startImage,
            x: this.game.width / 2 - startImage.width / 2,
            y: this.game.height - startImage.height - 32,
            touchable: true
        });
        this.start.pointDown.handle(this, this.onStart);
        this.spinner = new Spinner_1.Spinner({
            scene: this,
            font: this.font,
            upSrc: this.game.assets["up"],
            downSrc: this.game.assets["down"],
            value: 0,
            minValue: 0,
            maxValue: 9,
            x: this.game.width / 2 - (64 * 6 / 2),
            y: 20
        });
        this.append(this.spinner);
        this.append(this.start);
    };
    TitleScene.prototype.onStart = function () {
        var _this = this;
        var gameScene = new GameScene_1.GameScene({
            game: this.game
        }, {
            width: 10,
            height: 10,
            mine: 10,
            seed: this.spinner.value
        });
        gameScene.gameStateChanged.handle(function (state) {
            if (state === MineSweeper_1.GameState.GameClear || state === MineSweeper_1.GameState.GameOver) {
                var resultScene = new ResultScene_1.ResultScene(_this.game, state === MineSweeper_1.GameState.GameClear);
                _this.game.replaceScene(resultScene);
            }
        });
        this.game.pushScene(gameScene);
    };
    return TitleScene;
}(g.Scene));
exports.TitleScene = TitleScene;
