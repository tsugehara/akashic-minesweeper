window.addEventListener("load", function() {

	start("exportHTML");

	function start(gamePath) {
		// TODO WebGL有効化
		// // webgl=1でRendererを問答無用でWebGLのみにする
		// if (getParameterByName("webgl")) {
		// 	conf.renderers = ["webgl"];
		// }

		// 本来であればgameIdはBIGINTとして扱われるので数値だけども、export html用なのでgamePathをそのまま使う
		var sandboxGameId = gamePath;
		var sandboxPlayer = { id: "9999", name: "sandbox-player" };
		var sandboxPlayId = "sandboxDummyPlayId";
		var storage = new gameStorage.GameStorage(window.localStorage, { gameId: sandboxGameId });

		var pdiBrowser = require("@akashic/pdi-browser");
		var gdr = require("@akashic/game-driver");

		var amflowClient = new gdr.MemoryAmflowClient({
			playId: sandboxPlayId,
			putStorageDataSyncFunc: storage.set.bind(storage),
			getStorageDataSyncFunc: function (readKeys) {
				var svs = storage.load(readKeys);
				// StorageValue[][]からStorageData[]に変換する
				// TODO: StorageValue[][]が返ってくる必然性はない。game-storage側の仕様を変えるべき。
				return readKeys.map(function (k, i) { return { readKey: k, values: svs[i] }; });
			}
		});
		// -----------ここからアツマール用の特殊コード--------------
		window.sandboxDeveloperProps = {
			game: null,
			driver: null,
			amflow: null,
			gameStorage: storage,
			gameId: sandboxGameId,
			path: gamePath,
			gdr: gdr,
			sandboxPlayer: sandboxPlayer
		};
		var startPoints = [
			{
				data: {
					seed: Date.now()
				},
				frame: 0
			}
		];
		var tickList = [
			0,
			0,
			[]
		];
		amflowClient = new gdr.ReplayAmflowProxy({
			amflow: amflowClient,
			tickList: tickList,
			startPoints: startPoints
		});
		// -----------ここまで--------------

		var pf = new pdiBrowser.Platform({
			amflow: amflowClient,
			containerView: document.getElementById("container"),
			audioPlugins: [pdiBrowser.HTMLAudioPlugin],
		});

		pf.loadGameConfiguration = function(url, callback) {
			try {
				var gameJsonText = window.gLocalAssetContainer["game.json"];
				callback(null, JSON.parse(gameJsonText));
			} catch(error) {
				callback(error, null);
			}
		};

		pf._resourceFactory.createScriptAsset = function(id, assetPath) {
			return new LocalScriptAsset(id, assetPath);
		};

		pf._resourceFactory.createTextAsset = function(id, assetPath) {
			return new LocalTextAsset(id, assetPath);
		};

		driver = new gdr.GameDriver({
			platform: pf,
			player: sandboxPlayer,
			errorHandler: function (e) { console.log("ERRORHANDLER:", e); }
		});

		driver.gameCreatedTrigger.handle(function (game) {
			window.sandboxDeveloperProps.game = game;
			window.sandboxDeveloperProps.driver = driver;
			window.sandboxDeveloperProps.amflow = amflowClient;
		});

		driver.initialize({
			configurationUrl: "game.json",
			assetBase: "./",
			driverConfiguration: {
				playId: sandboxPlayId,
				playToken: "dummyToken",
				// executionMode: gdr.ExecutionMode.Active
				executionMode: gdr.ExecutionMode.Passive
			},
			loopConfiguration: {
				// loopMode: gdr.LoopMode.Realtime
				loopMode: gdr.LoopMode.Replay,
				delayIgnoreThreshold: Number.MAX_VALUE,
				jumpTryThreshold: Number.MAX_VALUE
			}
		}, function (e) {
			if (e) {
				throw e;
			}
			driver.startGame();
		});
	}
});
