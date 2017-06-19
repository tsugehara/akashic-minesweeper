window.gLocalAssetContainer["main"] = function(g) { (function(exports, require, module, __filename, __dirname) {
"use strict";
var TitleScene_1 = require("./TitleScene");
function main(param) {
    var title = new TitleScene_1.TitleScene(g.game);
    g.game.pushScene(title);
}
module.exports = main;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);}
