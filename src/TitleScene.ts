import {Spinner} from "./Spinner";
import {GameScene} from "./GameScene";
import {ResultScene} from "./ResultScene";
import {GameState} from "./MineSweeper";

// なぜかこれがシーン遷移を全部知ってるクラスになってる
export class TitleScene extends g.Scene {
	font: g.Font;
	start: g.E;
	spinner: Spinner;

	constructor(game: g.Game) {
		super({
			game: game,
			assetIds: ["start"]
		});
		const glyphData = JSON.parse((<g.TextAsset>this.game.assets["glyph"]).data);

		this.font = new g.BitmapFont(
			this.game.assets["number"],
			glyphData.map,
			glyphData.width,
			glyphData.height,
			glyphData.missingGlyph
		);
		this.spinner = null;
		this.start = null;

		this.loaded.handle(this, this.onLoaded);
	}

	onLoaded() {
		const startImage = <g.ImageAsset>this.assets["start"];
		this.start = new g.Sprite({
			scene: this,
			src: startImage,
			x: this.game.width / 2 - startImage.width / 2,
			y: this.game.height - startImage.height - 32,
			touchable: true
		});
		this.start.pointDown.handle(this, this.onStart);
		this.spinner = new Spinner({
			scene: this,
			font: this.font,
			upSrc: this.game.assets["up"],
			downSrc: this.game.assets["down"],
			value: 0,
			minValue: 0,
			maxValue: 9,
			x: this.game.width / 2 - (64 * 6 / 2),
			y: 20
		});
		this.append(this.spinner);
		this.append(this.start);
	}

	onStart() {
		const gameScene = new GameScene({
			game: this.game
		}, {
			width: 10,
			height: 10,
			mine: 10,
			seed: this.spinner.value
		});
		gameScene.gameStateChanged.handle((state: GameState) => {
			if (state === GameState.GameClear || state === GameState.GameOver) {
				const resultScene = new ResultScene(
					this.game,
					state === GameState.GameClear
				);
				this.game.replaceScene(resultScene);
			}
		});
		this.game.pushScene(gameScene);
	}
}
