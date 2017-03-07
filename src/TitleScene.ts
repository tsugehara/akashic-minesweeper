import {Spinner} from "./Spinner";
import {GameScene} from "./GameScene";
import {ResultScene} from "./ResultScene";
import {GameState, GameConfig} from "./MineSweeper";

// なぜかこれがシーン遷移を全部知ってるクラスになってる
export class TitleScene extends g.Scene {
	font: g.Font;
	start: g.E;
	title: g.E;
	spinner: Spinner;
	config: GameConfig;

	constructor(game: g.Game) {
		super({
			game: game,
			assetIds: ["start", "start_on", "title", "open_cell", "close_cell"]
		});
		const glyphData = JSON.parse((<g.TextAsset>this.game.assets["stage_glyph"]).data);

		this.font = new g.BitmapFont(
			this.game.assets["stage_number"],
			glyphData.map,
			glyphData.width,
			glyphData.height,
			glyphData.missingGlyph
		);
		this.spinner = null;
		this.start = null;
		this.config = {
			width: 10,
			height: 10,
			mine: 10,
			seed: 0
		};

		this.loaded.handle(this, this.onLoaded);
	}

	onLoaded() {
		const startImage = <g.ImageAsset>this.assets["start"];
		const titleImage = <g.ImageAsset>this.assets["title"];
		this.title = new g.Sprite({
			scene: this,
			src: titleImage,
			x: this.game.width / 2 - titleImage.width / 2,
			y: this.game.height / 2 - titleImage.height / 2
		});
		this.start = new g.Sprite({
			scene: this,
			src: startImage,
			x: this.game.width / 2 - startImage.width / 2,
			y: this.title.y + titleImage.height - 5 - startImage.height,
			touchable: true
		});
		this.start.pointDown.handle(this, this.onStarting);
		this.start.pointUp.handle(this, this.onStart);
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
		this.createBg();
		this.append(this.spinner);
		this.append(this.title);
		this.append(this.start);
	}

	createBg() {
		const w = this.game.width / this.config.width | 0;
		const h = this.game.height / this.config.height | 0;
		for (let x = 0; x < this.config.width; x++) {
			for (let y = 0; y < this.config.height; y++) {
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
	}

	onStarting() {
		(<g.Sprite>this.start).surface = (<g.ImageAsset>this.assets["start_on"]).asSurface();
		(<g.Sprite>this.start).invalidate();
	}

	onStart() {
		this.config.seed = this.spinner.value;
		const gameScene = new GameScene(this.game, this.config);
		gameScene.gameStateChanged.handle((state: GameState) => {
			if (state === GameState.GameClear || state === GameState.GameOver) {
				const resultScene = new ResultScene(
					this.game,
					state === GameState.GameClear,
					gameScene
				);
				this.game.replaceScene(resultScene);
			}
		});
		this.game.pushScene(gameScene);
	}
}
