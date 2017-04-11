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
var Button_1 = require("./Button");
var Spinner = (function (_super) {
    __extends(Spinner, _super);
    function Spinner(param) {
        var _this = _super.call(this, param) || this;
        _this.valueChanging = new g.Trigger();
        _this.valueChanged = new g.Trigger();
        _this.minValue = param.minValue;
        _this.maxValue = param.maxValue;
        _this.value = param.value;
        // TODO: fontSize指定や型指定による自動レイアウト調整
        // TODO: このコードはfontSize = 64, 桁数4固定
        _this.up = new Button_1.Button({
            scene: _this.scene,
            buttonImage: param.upButtonImage,
            pushedImage: param.upPushedImage,
            x: -80,
            y: 23,
            width: param.upButtonImage.width,
            height: param.upButtonImage.height
        });
        _this.down = new Button_1.Button({
            scene: _this.scene,
            buttonImage: param.downButtonImage,
            pushedImage: param.downPushedImage,
            x: 88,
            y: 23,
            width: param.downButtonImage.width,
            height: param.downButtonImage.height
        });
        _this.font = param.font ? param.font : null;
        _this.text = param.text ? param.text : new g.Label({
            scene: _this.scene,
            font: _this.font,
            fontSize: _this.font.size,
            text: "" + _this.value,
            textAlign: g.TextAlign.Center,
            widthAutoAdjust: false,
            width: 50,
            height: 62,
            x: 0,
            y: 0
        });
        _this.up.clicked.handle(_this, _this.onUp);
        _this.down.clicked.handle(_this, _this.onDown);
        _this.append(_this.text);
        _this.append(_this.up);
        _this.append(_this.down);
        return _this;
    }
    Spinner.prototype.changeValue = function (value) {
        while (value < this.minValue)
            value = (this.maxValue + 1 - (this.minValue - value));
        while (value > this.maxValue)
            value = (this.minValue - 1 + (value - this.maxValue));
        var e = {
            target: this,
            data: value
        };
        this.valueChanging.fire(e);
        if (e.cancel)
            return;
        this.value = value;
        this.valueChanged.fire(this.value);
        this.text.text = "" + this.value;
        this.text.invalidate();
    };
    Spinner.prototype.onUp = function () {
        this.changeValue(this.value - 1);
    };
    Spinner.prototype.onDown = function () {
        this.changeValue(this.value + 1);
    };
    // TODO: upやdownを外部からもらっちゃうと、このタイミングでついでにdestroyしてしまうな・・
    Spinner.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return Spinner;
}(g.E));
exports.Spinner = Spinner;
