window.addEventListener("load", function() {
	window.sandboxDeveloperProps.driver.gameCreatedTrigger.handle(function(game) {
		window.sandboxDeveloperProps.game = game;
		if (window.RPGAtsumaru) {
			var plugin = require("./lib/index");
			plugin.init({
				atsumaru: window.RPGAtsumaru,
				game: window.sandboxDeveloperProps.game,
				gameDriver: window.sandboxDeveloperProps.gameDriver,
				amflow: window.sandboxDeveloperProps.amflow,
				gdr: window.sandboxDeveloperProps.gdr
			});
		}

		// TODO: ここに書くのやら？
		var saveButton = document.getElementById("btn_save");
		var loadButton = document.getElementById("btn_load");
		if (saveButton) {
			saveButton.addEventListener("click", function() {
				if (window.RPGAtsumaru) {
					game.external.atsumaru.storage.saveCurrentPlaylog("1");
				} else {
					// これはこれでよさげ。アツマールに保存するだけでよさそう
					var dump = window.sandboxDeveloperProps.amflow.dump();
					window.localStorage.setItem("1", JSON.stringify(dump));
				}
			});
		}
		var driver = window.sandboxDeveloperProps.driver;
		if (loadButton) {
			loadButton.addEventListener("click", function() {
				if (window.RPGAtsumaru) {
					game.external.atsumaru.storage.loadPlaylog("1");
				} else {
					// ここをどう書けばリプレーモードになってくれるのかの確認が必要
					var dump = window.localStorage.getItem("1");
					var playlog = JSON.parse(dump);
					window.sandboxDeveloperProps.amflow._tickList = playlog.tickList;
					window.sandboxDeveloperProps.amflow._startPoints = playlog.startPoints;
					driver.stopGame();
					driver.changeState({
						driverConfiguration: {
							executionMode: window.sandboxDeveloperProps.gdr.ExecutionMode.PASSIVE,
							playToken: window.sandboxDeveloperProps.gdr.MemoryAmflowClient.TOKEN_PASSIVE
						},
						loopConfiguration: {
							playbackRate: 1,  // 実行速度もリセットしておく
							loopMode: window.sandboxDeveloperProps.gdr.LoopMode.Replay,
							delayIgnoreThreshold: Number.MAX_VALUE,  // Ugh! GameLoopがデフォルト値にリセットする方法を提供するべき
							jumpTryThreshold: Number.MAX_VALUE
						}
					}, function (err) {
						if (err) {
							console.log(err);
							return;
						}
						// driver.setNextAge(props.game.age);
						driver.startGame();
					});
				}
			});
		}
		return false;
	});
});
