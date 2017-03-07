import * as m from "./MineSweeper";

export class GameScene extends g.Scene {
	readonly config: m.GameConfig;
	gameStateChanged: g.Trigger<m.GameState>;
	mineSweeper: m.MineSweeper;

	constructor(game: g.Game, config?: m.GameConfig) {
		super({
			game: game,
			assetIds: ["open_cell", "close_cell"]
		});
		this.config = config ? config : {
			width :10,
			height: 10,
			mine: 10,
			seed: 0
		};
		this.gameStateChanged = new g.Trigger();
		this.mineSweeper = null;
		this.loaded.handle(this, this.onLoaded);
	}

	onGameStateChanged(state: m.GameState) {
		this.gameStateChanged.fire(state);
	}

	onLoaded() {
		this.mineSweeper = new m.MineSweeper(this.config, this);
		this.mineSweeper.gameStateChanged.handle(this, this.onGameStateChanged);
		return false;
	}
}
