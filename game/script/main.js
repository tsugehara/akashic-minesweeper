"use strict";
var TitleScene_1 = require("./TitleScene");
function main(param) {
    var title = new TitleScene_1.TitleScene(g.game);
    g.game.pushScene(title);
}
module.exports = main;
