import * as m from "./MineSweeper";

export class GameScene extends g.Scene {
	readonly config: m.GameConfig;
	gameStateChanged: g.Trigger<m.GameState>;
	mineSweeper: m.MineSweeper;

	constructor(param: g.SceneParameterObject, config?: m.GameConfig) {
		super(param);
		this.config = config ? config : {
			width :10,
			height: 10,
			mine: 10,
			seed: 0
		};
		this.gameStateChanged = new g.Trigger();
		this.mineSweeper = new m.MineSweeper(config, this);
		this.mineSweeper.gameStateChanged.handle(this, this.onGameStateChanged);
	}

	onGameStateChanged(state: m.GameState) {
		this.gameStateChanged.fire(state);
	}
}
