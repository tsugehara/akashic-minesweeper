window.gLocalAssetContainer["BorderRect"] = function(g) { (function(exports, require, module, __filename, __dirname) {
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
var BorderRect = (function (_super) {
    __extends(BorderRect, _super);
    function BorderRect(param) {
        var _this = _super.call(this, param) || this;
        _this.borderColor = param.borderColor ? param.borderColor : null;
        _this.borderWidth = param.borderWidth ? param.borderWidth : 1;
        return _this;
    }
    BorderRect.prototype.renderSelf = function (renderer) {
        if (this.borderColor) {
            renderer.fillRect(0, 0, this.width, this.height, this.borderColor);
            renderer.fillRect(this.borderWidth, this.borderWidth, this.width - this.borderWidth * 2, this.height - this.borderWidth * 2, this.cssColor);
        }
        else {
            _super.prototype.renderSelf.call(this, renderer);
        }
        return false;
    };
    return BorderRect;
}(g.FilledRect));
exports.BorderRect = BorderRect;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);}
