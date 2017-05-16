(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener("load", function() {
	window.sandboxDeveloperProps.driver.gameCreatedTrigger.handle(function(game) {
		window.sandboxDeveloperProps.game = game;
		var plugin = require("./lib/index");
		plugin.init({
			atsumaru: window.RPGAtsumaru,
			game: window.sandboxDeveloperProps.game,
			gameDriver: window.sandboxDeveloperProps.gameDriver,
			amflow: window.sandboxDeveloperProps.amflow,
			gdr: window.sandboxDeveloperProps.gdr
		});
		return false;
	});
});

},{"./lib/index":2}],2:[function(require,module,exports){
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
function init(param) {
    param.game.external.atsumaru = new AtsumaruPlugin(param);
}
exports.init = init;
var AtsumaruAPI = (function () {
    function AtsumaruAPI(param) {
        this.atsumaru = param.atsumaru;
        this.game = param.game;
        this.gameDriver = param.gameDriver;
        this.amflow = param.amflow;
        this.gdr = param.gdr;
    }
    return AtsumaruAPI;
}());
exports.AtsumaruAPI = AtsumaruAPI;
var AtsumaruPlugin = (function () {
    // controller: ControllerAPI;
    function AtsumaruPlugin(param) {
        this.storage = new StorageAPI(param);
        this.comment = new CommentAPI(param);
    }
    return AtsumaruPlugin;
}());
exports.AtsumaruPlugin = AtsumaruPlugin;
var StorageAPI = (function (_super) {
    __extends(StorageAPI, _super);
    function StorageAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageAPI.prototype.saveCurrentPlaylog = function (slotId) {
        // TODO
    };
    StorageAPI.prototype.loadPlaylog = function (slotId) {
        // TODO
    };
    StorageAPI.prototype.listPlaylog = function () {
        // TODO
    };
    StorageAPI.prototype.save = function (slotId, data) {
        var _this = this;
        return this.atsumaru.storage.getItems().then(function (items) {
            var matched = false;
            for (var i = 0; i < items.length; i++) {
                if (items[i].key === slotId) {
                    items[i].value = data;
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                items.push({
                    key: slotId,
                    value: data
                });
            }
            return _this.atsumaru.storage.setItems(items);
        });
    };
    StorageAPI.prototype.load = function (slotId) {
        return this.atsumaru.storage.getItems().then(function (items) {
            var targetItems = items.filter(function (item) { return item.key === slotId; });
            if (targetItems.length === 0) {
                return Promise.reject(new Error(slotId + " not found."));
            }
            return Promise.resolve(targetItems[0].value);
        });
    };
    StorageAPI.prototype.remove = function (slotId) {
        return this.atsumaru.storage.removeItem(slotId);
    };
    return StorageAPI;
}(AtsumaruAPI));
exports.StorageAPI = StorageAPI;
var CommentAPI = (function (_super) {
    __extends(CommentAPI, _super);
    function CommentAPI(param) {
        var _this = _super.call(this, param) || this;
        _this.sceneIndex = 0;
        _this.autoChangeScene = false;
        param.game._sceneChanged.handle(_this, _this.onSceneChanged);
        return _this;
    }
    CommentAPI.prototype.pushContextFactor = function (factor) {
        return this.atsumaru.comment.pushContextFactor(factor);
    };
    CommentAPI.prototype.pushMinorContext = function () {
        return this.atsumaru.comment.pushMinorContenxt();
    };
    CommentAPI.prototype.resetAndChangeScene = function (sceneName) {
        return this.atsumaru.comment.resetAndChangeScene(sceneName);
    };
    CommentAPI.prototype.changeScene = function (sceneName) {
        return this.atsumaru.comment.changeScene(sceneName);
    };
    CommentAPI.prototype.setContext = function (context) {
        return this.atsumaru.comment.setContext(context);
    };
    CommentAPI.prototype.onSceneChanged = function (scene) {
        this.sceneIndex++;
        if (this.autoChangeScene) {
            this.atsumaru.comment.changeScene(scene.name || "" + this.sceneIndex);
        }
    };
    return CommentAPI;
}(AtsumaruAPI));
exports.CommentAPI = CommentAPI;
// TODO: あとで
// export class ControllerAPI extends AtsumaruAPI {
// 	subscrive(observer: Observer) {
// 		return RPGAtsumaru.controllers.defaultController.subscribe(observer);
// 	}
// }

},{}]},{},[1,2]);