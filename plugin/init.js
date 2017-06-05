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
					var dump = window.sandboxDeveloperProps.amflow.dump();
				}
			});
		}
		if (loadButton) {
			saveButton.addEventListener("click", function() {
				if (window.RPGAtsumaru) {
					game.external.atsumaru.storage.loadPlaylog("1");
				}
			});
		}
		return false;
	});
});
