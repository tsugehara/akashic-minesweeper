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
var CellView = (function (_super) {
    __extends(CellView, _super);
    function CellView(param) {
        var _this = _super.call(this, param) || this;
        _this.font = param.font;
        _this.closeBg = param.closeBg;
        _this.openBg = param.openBg;
        _this.value = param.value;
        _this.isOpen = false;
        var fontSize = _this.height / 2 | 0;
        _this.label = new g.Label({
            scene: _this.scene,
            x: 0,
            y: (_this.height / 2 - fontSize / 2) / 2 | 0,
            width: _this.width,
            height: _this.height,
            font: _this.font,
            fontSize: fontSize,
            textAlign: g.TextAlign.Center,
            widthAutoAdjust: false,
            text: "" + _this.value
        });
        return _this;
    }
    CellView.prototype.changeValue = function (value) {
        this.value = value;
        this.label.text = "" + this.value;
        this.label.invalidate();
    };
    CellView.prototype.open = function () {
        this.isOpen = true;
        if (this.value > 0) {
            this.append(this.label);
        }
        this.modified();
    };
    CellView.prototype.close = function () {
        this.isOpen = false;
        if (this.label.parent) {
            this.label.remove();
        }
        this.modified();
    };
    CellView.prototype.renderSelf = function (renderer) {
        if (this.isOpen) {
            renderer.drawImage(this.openBg, 0, 0, this.width, this.height, 0, 0);
        }
        else {
            renderer.drawImage(this.closeBg, 0, 0, this.width, this.height, 0, 0);
        }
        return _super.prototype.renderSelf.call(this, renderer);
    };
    return CellView;
}(g.E));
exports.CellView = CellView;
