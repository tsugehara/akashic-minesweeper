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
