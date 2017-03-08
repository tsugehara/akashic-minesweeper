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
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["Normal"] = 0] = "Normal";
    ButtonState[ButtonState["Pushed"] = 1] = "Pushed";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(param) {
        var _this = _super.call(this, param) || this;
        _this.buttonImage = param.buttonImage;
        _this.pushedImage = param.pushedImage;
        _this.touchable = true;
        _this.clicked = new g.Trigger();
        _this.pointDown.handle(_this, _this.onPointDown);
        _this.pointUp.handle(_this, _this.onPointUp);
        _this.buttonState = ButtonState.Normal;
        return _this;
    }
    Button.prototype.onPointDown = function (e) {
        this.buttonState = ButtonState.Pushed;
        this.modified();
    };
    Button.prototype.onPointUp = function (e) {
        // TODO: 本当は範囲外だったら発火しないとかやりたい
        this.clicked.fire();
        this.buttonState = ButtonState.Normal;
        this.modified();
    };
    Button.prototype.renderSelf = function (renderer) {
        if (this.buttonState === ButtonState.Pushed && this.pushedImage) {
            renderer.drawImage(this.pushedImage, 0, 0, this.width, this.height, 0, 0);
        }
        else {
            renderer.drawImage(this.buttonImage, 0, 0, this.width, this.height, 0, 0);
        }
        return _super.prototype.renderSelf.call(this, renderer);
    };
    return Button;
}(g.E));
exports.Button = Button;
