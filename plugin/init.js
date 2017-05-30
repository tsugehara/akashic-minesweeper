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
		return false;
	});
});
