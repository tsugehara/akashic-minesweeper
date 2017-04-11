if (! ("gLocalAssetContainer" in window)) {
	window.gLocalAssetContainer = {};
}


window.gLocalAssetContainer["game.json"] = "%7B%0A%09%22width%22%3A%20790%2C%0A%09%22height%22%3A%20600%2C%0A%09%22fps%22%3A%2030%2C%0A%09%22main%22%3A%20%22.%2Fscript%2Fmain.js%22%2C%0A%09%22assets%22%3A%20%7B%0A%09%09%22main%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2Fmain.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22Spinner%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FSpinner.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22BorderRect%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FBorderRect.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22MineSweeper%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FMineSweeper.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22GameScene%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FGameScene.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22Cell%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FCell.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22ResultScene%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FResultScene.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22TitleScene%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FTitleScene.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22glyph%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22text%22%2C%0A%09%09%09%22path%22%3A%20%22text%2Fglyph.json%22%0A%09%09%7D%2C%0A%09%09%22stage_glyph%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22text%22%2C%0A%09%09%09%22path%22%3A%20%22text%2Fstage_glyph.json%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22triangle%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Ftriangle.png%22%2C%0A%09%09%09%22width%22%3A%2045%2C%0A%09%09%09%22height%22%3A%2042%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22triangle_on%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Ftriangle_on.png%22%2C%0A%09%09%09%22width%22%3A%2045%2C%0A%09%09%09%22height%22%3A%2042%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22triangle_reverse%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Ftriangle_reverse.png%22%2C%0A%09%09%09%22width%22%3A%2045%2C%0A%09%09%09%22height%22%3A%2042%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22triangle_reverse_on%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Ftriangle_reverse_on.png%22%2C%0A%09%09%09%22width%22%3A%2045%2C%0A%09%09%09%22height%22%3A%2042%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22number%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fnumber.png%22%2C%0A%09%09%09%22width%22%3A%20440%2C%0A%09%09%09%22height%22%3A%2034%0A%09%09%7D%2C%0A%09%09%22stage_number%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fstage_number.png%22%2C%0A%09%09%09%22width%22%3A%20550%2C%0A%09%09%09%22height%22%3A%2062%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22start%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fstart.png%22%2C%0A%09%09%09%22width%22%3A%20330%2C%0A%09%09%09%22height%22%3A%20100%0A%09%09%7D%2C%0A%09%09%22start_on%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fstart_on.png%22%2C%0A%09%09%09%22width%22%3A%20330%2C%0A%09%09%09%22height%22%3A%20100%0A%09%09%7D%2C%0A%09%09%22title%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Ftitle.png%22%2C%0A%09%09%09%22width%22%3A%20466%2C%0A%09%09%09%22height%22%3A%20320%0A%09%09%7D%2C%0A%09%09%22clear%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fclear.png%22%2C%0A%09%09%09%22width%22%3A%20590%2C%0A%09%09%09%22height%22%3A%20390%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22gameover%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fgameover.png%22%2C%0A%09%09%09%22width%22%3A%20590%2C%0A%09%09%09%22height%22%3A%20390%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%2C%0A%09%09%22open_cell%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fopen_cell.png%22%2C%0A%09%09%09%22width%22%3A%2080%2C%0A%09%09%09%22height%22%3A%2060%0A%09%09%7D%2C%0A%09%09%22close_cell%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22image%22%2C%0A%09%09%09%22path%22%3A%20%22image%2Fclose_cell.png%22%2C%0A%09%09%09%22width%22%3A%2080%2C%0A%09%09%09%22height%22%3A%2060%0A%09%09%7D%2C%0A%09%09%22Button%22%3A%20%7B%0A%09%09%09%22type%22%3A%20%22script%22%2C%0A%09%09%09%22path%22%3A%20%22script%2FButton.js%22%2C%0A%09%09%09%22global%22%3A%20true%0A%09%09%7D%0A%09%7D%0A%7D";


window.gLocalAssetContainer["main"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
"use strict";
var TitleScene_1 = require("./TitleScene");
function main(param) {
    var title = new TitleScene_1.TitleScene(g.game);
    g.game.pushScene(title);
}
module.exports = main;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["Spinner"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["BorderRect"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["MineSweeper"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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
var Cell_1 = require("./Cell");
var GameState;
(function (GameState) {
    GameState[GameState["Play"] = 0] = "Play";
    GameState[GameState["GameOver"] = 1] = "GameOver";
    GameState[GameState["GameClear"] = 2] = "GameClear";
})(GameState = exports.GameState || (exports.GameState = {}));
var Cell = (function () {
    function Cell(x, y) {
        this.x = x;
        this.y = y;
        this.mine = false;
        this.mineCount = 0;
        this.state = State.Hidden;
        this.bombed = new g.Trigger();
        this.cleared = new g.Trigger();
    }
    Cell.prototype.bomb = function () {
        if (!this.mine) {
            throw new Error("invalid state!");
        }
        this.bombed.fire(this);
    };
    Cell.prototype.clear = function () {
        if (this.mine) {
            throw new Error("invalid state!!");
        }
        this.cleared.fire(this);
    };
    return Cell;
}());
exports.Cell = Cell;
var State;
(function (State) {
    State[State["Unknown"] = 0] = "Unknown";
    State[State["Hidden"] = 1] = "Hidden";
    State[State["Clear"] = 2] = "Clear";
    State[State["Bomb"] = 3] = "Bomb";
    State[State["BombHere"] = 4] = "BombHere";
    State[State["Flag"] = 5] = "Flag";
})(State = exports.State || (exports.State = {}));
var MineSweeper = (function () {
    function MineSweeper(config, scene) {
        this.gameState = GameState.Play;
        this.gameStateChanged = new g.Trigger();
        this.gameField = new g.Pane({
            scene: scene,
            x: 0,
            y: 0,
            width: g.game.width,
            height: g.game.height
        });
        scene.append(this.gameField);
        this.random = new g.XorshiftRandomGenerator(config.seed);
        this.scene = scene;
        this.config = config;
        this.field = [];
        for (var x = 0; x < config.width; x++) {
            this.field[x] = [];
            for (var y = 0; y < config.height; y++) {
                this.field[x][y] = new Cell(x, y);
                this.field[x][y].bombed.handle(this, this.onBombed);
                this.field[x][y].cleared.handle(this, this.onCleared);
            }
        }
        this.setupField(this.gameField);
        this.setMines();
    }
    MineSweeper.prototype.onBombed = function (cell) {
        if (this.gameState !== GameState.Play)
            return;
        cell.state = State.BombHere;
        for (var x = 0; x < this.field.length; x++) {
            for (var y = 0; y < this.field[x].length; y++) {
                if (this.field[x][y].mine) {
                    // this.field[x][y].state = this.field[x][y].state === State.BombHere ? State.BombHere : State.Bomb;
                    // this.field[x][y].view.updateByState();
                }
            }
        }
        this.gameState = GameState.GameOver;
        this.gameStateChanged.fire(this.gameState);
    };
    MineSweeper.prototype.onCleared = function (cell) {
        var _this = this;
        if (this.gameState !== GameState.Play)
            return;
        var p = function (x, y) {
            if (x < 0)
                return;
            if (x > _this.field.length - 1)
                return;
            if (y < 0)
                return;
            if (y > _this.field[x].length - 1)
                return;
            var c = _this.field[x][y];
            if (c.state !== State.Hidden && c.state !== State.Flag)
                return;
            c.state = State.Clear;
            c.view.updateByState();
            if (c.mineCount > 0)
                return;
            p(x - 1, y);
            p(x + 1, y);
            p(x, y - 1);
            p(x, y + 1);
            p(x - 1, y - 1);
            p(x - 1, y + 1);
            p(x + 1, y - 1);
            p(x + 1, y + 1);
        };
        cell.state = State.Clear;
        cell.view.updateByState();
        if (cell.mineCount > 0) {
            this.clearGame();
            return;
        }
        p(cell.x + 1, cell.y);
        p(cell.x - 1, cell.y);
        p(cell.x, cell.y + 1);
        p(cell.x, cell.y - 1);
        p(cell.x + 1, cell.y - 1);
        p(cell.x + 1, cell.y + 1);
        p(cell.x - 1, cell.y - 1);
        p(cell.x - 1, cell.y + 1);
        this.clearGame();
    };
    MineSweeper.prototype.clearGame = function () {
        for (var x = 0; x < this.field.length; x++) {
            for (var y = 0; y < this.field[x].length; y++) {
                if ((!this.field[x][y].mine) && (this.field[x][y].state !== State.Clear))
                    return false;
            }
        }
        for (var x = 0; x < this.field.length; x++) {
            for (var y = 0; y < this.field[x].length; y++) {
                if (this.field[x][y].mine) {
                    this.field[x][y].state = State.Bomb;
                    this.field[x][y].view.updateByState();
                }
            }
        }
        this.gameState = GameState.GameClear;
        this.gameStateChanged.fire(this.gameState);
        return true;
    };
    MineSweeper.prototype.setMines = function () {
        for (var i = 0; i < this.config.mine; i++) {
            do {
                var x = this.random.get(0, this.field.length - 1);
                var y = this.random.get(0, this.field[x].length - 1);
                if (!this.field[x][y].mine) {
                    this.field[x][y].mine = true;
                    break;
                }
            } while (true);
        }
        for (var x = 0; x < this.field.length; x++) {
            for (var y = 0; y < this.field[x].length; y++) {
                this.field[x][y].mineCount = this.calculateMineCount(x, y);
                this.field[x][y].view.view.changeValue(this.field[x][y].mineCount); // TODO: きもい
            }
        }
    };
    MineSweeper.prototype.getWidth = function (parent) {
        if (parent instanceof g.Scene) {
            return parent.game.width;
        }
        return parent.width;
    };
    MineSweeper.prototype.getHeight = function (parent) {
        if (parent instanceof g.Scene) {
            return parent.game.height;
        }
        return parent.height;
    };
    MineSweeper.prototype.setupField = function (parent) {
        var w = this.getWidth(parent) / this.field.length | 0;
        var h = this.getHeight(parent) / this.field[0].length | 0;
        var glyphData = JSON.parse(this.scene.assets["glyph"].data);
        var font = new g.BitmapFont(this.scene.assets["number"], glyphData.map, glyphData.width, glyphData.height, glyphData.missingGlyph);
        for (var x = 0; x < this.field.length; x++) {
            for (var y = 0; y < this.field[x].length; y++) {
                var view = new CellViewer(this.field[x][y], this.scene, font, x, y, w, h);
                view.x = x * w;
                view.y = y * h;
                parent.append(view);
                view.modified();
                this.field[x][y].view = view;
            }
        }
    };
    MineSweeper.prototype.calculateMineCount = function (centerX, centerY) {
        var _this = this;
        var xs = [];
        var ys = [];
        xs.push(centerX);
        if (centerX > 0)
            xs.push(centerX - 1);
        if (centerX < this.field.length - 1)
            xs.push(centerX + 1);
        ys.push(centerY);
        if (centerY > 0)
            ys.push(centerY - 1);
        if (centerY < this.field[centerY].length - 1)
            ys.push(centerY + 1);
        return xs.reduce(function (px, cx) {
            return px + ys.reduce(function (py, cy) {
                if (cx === centerX && cy === centerY)
                    return py;
                return py + (_this.field[cx][cy].mine ? 1 : 0);
            }, 0);
        }, 0);
    };
    return MineSweeper;
}());
exports.MineSweeper = MineSweeper;
var CellViewer = (function (_super) {
    __extends(CellViewer, _super);
    function CellViewer(cell, scene, font, x, y, width, height) {
        var _this = _super.call(this, {
            scene: scene,
            width: width,
            height: height
        }) || this;
        _this.cell = cell;
        _this.view = new Cell_1.CellView({
            scene: scene,
            x: 0,
            y: 0,
            width: width,
            height: height,
            font: font,
            touchable: true,
            openBg: scene.assets["open_cell"].asSurface(),
            closeBg: scene.assets["close_cell"].asSurface(),
            value: cell.mineCount,
            parent: _this
        });
        _this.view.pointDown.handle(_this, _this.onPointDown);
        return _this;
    }
    CellViewer.prototype.onPointDown = function (e) {
        if (this.cell.mine) {
            this.cell.bomb();
        }
        else {
            this.cell.clear();
        }
    };
    CellViewer.prototype.modified = function (isBubbling) {
        _super.prototype.modified.call(this, isBubbling);
        if (this.view)
            this.updateByState();
    };
    CellViewer.prototype.updateByState = function () {
        switch (this.cell.state) {
            case State.Bomb:
                this.view.open();
                /*
                this.bg.cssColor = "#000000";
                this.bg.modified();
                if (this.text.text !== "") {
                    this.text.text = "";
                    this.text.invalidate();
                }
                */
                break;
            case State.BombHere:
                this.view.open();
                /*
                this.bg.cssColor = "#ff0000";
                this.bg.modified();
                if (this.text.text !== "") {
                    this.text.text = "";
                    this.text.invalidate();
                }
                */
                break;
            case State.Clear:
                this.view.open();
                /*
                this.bg.cssColor = "#ffffff";
                this.bg.modified();
                this.text.text = "" + this.cell.mineCount;
                this.text.invalidate();
                */
                break;
            case State.Flag:
                // this.text.text = "旗";
                // this.text.invalidate();
                break;
            case State.Hidden:
                this.view.close();
                /*
                this.bg.cssColor = "#aaaaaa";
                this.bg.modified();
                if (this.text.text !== "") {
                    this.text.text = "";
                    this.text.invalidate();
                }
                */
                break;
            default:
                throw new Error("invalid cell state");
        }
    };
    return CellViewer;
}(g.E));
exports.CellViewer = CellViewer;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["GameScene"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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
var m = require("./MineSweeper");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(game, config) {
        var _this = _super.call(this, {
            game: game,
            assetIds: ["open_cell", "close_cell", "number", "glyph"]
        }) || this;
        _this.config = config ? config : {
            width: 10,
            height: 10,
            mine: 10,
            seed: 0
        };
        _this.gameStateChanged = new g.Trigger();
        _this.mineSweeper = null;
        _this.loaded.handle(_this, _this.onLoaded);
        return _this;
    }
    GameScene.prototype.onGameStateChanged = function (state) {
        this.gameStateChanged.fire(state);
    };
    GameScene.prototype.onLoaded = function () {
        this.mineSweeper = new m.MineSweeper(this.config, this);
        this.mineSweeper.gameStateChanged.handle(this, this.onGameStateChanged);
        return false;
    };
    return GameScene;
}(g.Scene));
exports.GameScene = GameScene;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["Cell"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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
        // const fontSize = this.height / 2 | 0;
        var fontSize = _this.font.size;
        _this.label = new g.Label({
            scene: _this.scene,
            x: 0,
            y: (_this.height / 2 - fontSize / 2) | 0,
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
        if (this.value > 0 && !this.label.parent) {
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

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["ResultScene"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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
            game: game
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
        var asset = this.game.assets[assetId];
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

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["TitleScene"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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
        this.createBg();
        this.append(this.title);
        this.append(this.spinner);
        this.append(this.start);
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
                var resultScene = new ResultScene_1.ResultScene(_this.game, state === MineSweeper_1.GameState.GameClear, gameScene);
                _this.game.replaceScene(resultScene);
            }
        });
        this.game.pushScene(gameScene);
    };
    return TitleScene;
}(g.Scene));
exports.TitleScene = TitleScene;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};


window.gLocalAssetContainer["glyph"] = "%7B%0A%09%22map%22%3A%7B%0A%09%09%2248%22%3A%7B%0A%09%09%09%22x%22%3A0%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2249%22%3A%7B%0A%09%09%09%22x%22%3A40%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2250%22%3A%7B%0A%09%09%09%22x%22%3A80%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2251%22%3A%7B%0A%09%09%09%22x%22%3A120%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2252%22%3A%7B%0A%09%09%09%22x%22%3A160%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2253%22%3A%7B%0A%09%09%09%22x%22%3A200%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2254%22%3A%7B%0A%09%09%09%22x%22%3A240%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2255%22%3A%7B%0A%09%09%09%22x%22%3A280%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2256%22%3A%7B%0A%09%09%09%22x%22%3A320%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2257%22%3A%7B%0A%09%09%09%22x%22%3A360%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%0A%09%7D%2C%0A%09%22missingGlyph%22%3A%7B%0A%09%09%22x%22%3A400%2C%0A%09%09%22y%22%3A0%0A%09%7D%2C%0A%09%22width%22%3A40%2C%0A%09%22height%22%3A34%0A%7D";


window.gLocalAssetContainer["stage_glyph"] = "%7B%0A%09%22map%22%3A%7B%0A%09%09%2248%22%3A%7B%0A%09%09%09%22x%22%3A0%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2249%22%3A%7B%0A%09%09%09%22x%22%3A50%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2250%22%3A%7B%0A%09%09%09%22x%22%3A100%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2251%22%3A%7B%0A%09%09%09%22x%22%3A150%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2252%22%3A%7B%0A%09%09%09%22x%22%3A200%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2253%22%3A%7B%0A%09%09%09%22x%22%3A250%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2254%22%3A%7B%0A%09%09%09%22x%22%3A300%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2255%22%3A%7B%0A%09%09%09%22x%22%3A350%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2256%22%3A%7B%0A%09%09%09%22x%22%3A400%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%2C%0A%09%09%2257%22%3A%7B%0A%09%09%09%22x%22%3A450%2C%0A%09%09%09%22y%22%3A0%0A%09%09%7D%0A%09%7D%2C%0A%09%22missingGlyph%22%3A%7B%0A%09%09%22x%22%3A500%2C%0A%09%09%22y%22%3A0%0A%09%7D%2C%0A%09%22width%22%3A50%2C%0A%09%22height%22%3A62%0A%7D";


window.gLocalAssetContainer["Button"] = function(g) {
(function(exports, require, module, __filename, __dirname) {
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

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
};
