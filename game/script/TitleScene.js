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
var Spinner_1 = require("./Spinner");
var GameScene_1 = require("./GameScene");
var ResultScene_1 = require("./ResultScene");
var MineSweeper_1 = require("./MineSweeper");
var Button_1 = require("./Button");
// なぜかこれがシーン遷移を全部知ってるクラスになってる
var TitleScene = (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene(game) {
        var _this = _super.call(this, {
            game: game,
            assetIds: ["start", "start_on", "title", "open_cell", "close_cell"]
        }) || this;
        var glyphData = JSON.parse(_this.game.assets["stage_glyph"].data);
        _this.font = new g.BitmapFont(_this.game.assets["stage_number"], glyphData.map, glyphData.width, glyphData.height, glyphData.missingGlyph);
        _this.spinner = null;
        _this.start = null;
        _this.config = {
            width: 10,
            height: 10,
            mine: 10,
            seed: 0
        };
        _this.loaded.handle(_this, _this.onLoaded);
        return _this;
    }
    TitleScene.prototype.onLoaded = function () {
        var startImage = this.assets["start"];
        var startOnImage = this.assets["start_on"];
        var titleImage = this.assets["title"];
        this.title = new g.Sprite({
            scene: this,
            src: titleImage,
            x: this.game.width / 2 - titleImage.width / 2,
            y: this.game.height / 2 - titleImage.height / 2
        });
        this.start = new Button_1.Button({
            scene: this,
            buttonImage: startImage.asSurface(),
            pushedImage: startOnImage.asSurface(),
            x: this.game.width / 2 - startImage.width / 2,
            y: this.title.y + titleImage.height - 5 - startImage.height,
            width: startImage.width,
            height: startImage.height
        });
        this.start.clicked.handle(this, this.onStart);
        this.spinner = new Spinner_1.Spinner({
            scene: this,
            font: this.font,
            upButtonImage: this.game.assets["triangle"].asSurface(),
            upPushedImage: this.game.assets["triangle_on"].asSurface(),
            downButtonImage: this.game.assets["triangle_reverse"].asSurface(),
            downPushedImage: this.game.assets["triangle_reverse_on"].asSurface(),
            value: 0,
            minValue: 0,
            maxValue: 9,
            x: this.game.width / 2 - 50 / 2,
            y: this.game.height / 2 - titleImage.height / 2 + 82
        });
        this.spinner.valueChanged.handle(this, this.onSpinnerValueChanged);
        this.createBg();
        this.append(this.title);
        this.append(this.spinner);
        this.append(this.start);
        if (this.game.external.atsumaru) {
            this.game.external.atsumaru.comment.resetAndChangeScene("title");
        }
    };
    TitleScene.prototype.createBg = function () {
        var w = this.game.width / this.config.width | 0;
        var h = this.game.height / this.config.height | 0;
        for (var x = 0; x < this.config.width; x++) {
            for (var y = 0; y < this.config.height; y++) {
                new g.Sprite({
                    scene: this,
                    parent: this,
                    src: this.assets["close_cell"],
                    x: x * w,
                    y: y * h,
                    width: w,
                    height: h
                });
            }
        }
    };
    TitleScene.prototype.onStart = function () {
        var _this = this;
        this.config.seed = this.spinner.value;
        var gameScene = new GameScene_1.GameScene(this.game, this.config);
        gameScene.gameStateChanged.handle(function (state) {
            if (state === MineSweeper_1.GameState.GameClear || state === MineSweeper_1.GameState.GameOver) {
                var resultScene = new ResultScene_1.ResultScene(_this.game, state === MineSweeper_1.GameState.GameClear, gameScene, _this.config.seed);
                _this.game.replaceScene(resultScene);
            }
        });
        this.game.pushScene(gameScene);
        // TODO: popSceneでの再表示はこれしかないのかな？
        this.game._sceneChanged.handle(function (scene) {
            if (scene === _this) {
                if (_this.game.external.atsumaru) {
                    _this.game.external.atsumaru.comment.resetAndChangeScene("title");
                }
                return false;
            }
        });
    };
    TitleScene.prototype.onSpinnerValueChanged = function (value) {
        if (this.game.external.atsumaru) {
            this.game.external.atsumaru.comment.pushContextFactor("" + value);
        }
        this.config.seed = value;
    };
    return TitleScene;
}(g.Scene));
exports.TitleScene = TitleScene;
