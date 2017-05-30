import {Spinner} from "./Spinner";
import {GameScene} from "./GameScene";
import {ResultScene} from "./ResultScene";
import {GameState, GameConfig} from "./MineSweeper";
import {Button} from "./Button";

// なぜかこれがシーン遷移を全部知ってるクラスになってる
export class TitleScene extends g.Scene {
	font: g.Font;
	start: Button;
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
		const startOnImage = (<g.ImageAsset>this.assets["start_on"]);
		const titleImage = <g.ImageAsset>this.assets["title"];
		this.title = new g.Sprite({
			scene: this,
			src: titleImage,
			x: this.game.width / 2 - titleImage.width / 2,
			y: this.game.height / 2 - titleImage.height / 2
		});
		this.start = new Button({
			scene: this,
			buttonImage: startImage.asSurface(),
			pushedImage: startOnImage.asSurface(),
			x: this.game.width / 2 - startImage.width / 2,
			y: this.title.y + titleImage.height - 5 - startImage.height,
			width: startImage.width,
			height: startImage.height
		});
		this.start.clicked.handle(this, this.onStart);
		this.spinner = new Spinner({
			scene: this,
			font: this.font,
			upButtonImage: (<g.ImageAsset>this.game.assets["triangle"]).asSurface(),
			upPushedImage: (<g.ImageAsset>this.game.assets["triangle_on"]).asSurface(),
			downButtonImage: (<g.ImageAsset>this.game.assets["triangle_reverse"]).asSurface(),
			downPushedImage: (<g.ImageAsset>this.game.assets["triangle_reverse_on"]).asSurface(),
			value: 0,
			minValue: 0,
			maxValue: 9,
			x: this.game.width / 2 - 50 / 2,
			y: this.game.height / 2 - titleImage.height / 2 + 82
		});
		this.spinner.valueChanged.handle(this, this.onSpinnerValueChanged);
		this.createBg();
		this.append(this.title);
		this.append(this.spinner);
		this.append(this.start);

		if (this.game.external.atsumaru) {
			(<AtsumaruGameAPI>this.game.external.atsumaru).comment.resetAndChangeScene("title");
		}
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

	onStart() {
		this.config.seed = this.spinner.value;
		const gameScene = new GameScene(this.game, this.config);
		gameScene.gameStateChanged.handle((state: GameState) => {
			if (state === GameState.GameClear || state === GameState.GameOver) {
				const resultScene = new ResultScene(
					this.game,
					state === GameState.GameClear,
					gameScene,
					this.config.seed
				);
				this.game.replaceScene(resultScene);
			}
		});
		this.game.pushScene(gameScene);
		// TODO: popSceneでの再表示はこれしかないのかな？
		this.game._sceneChanged.handle((scene: g.Scene) => {
			if (scene === this) {
				if (this.game.external.atsumaru) {
					(<AtsumaruGameAPI>this.game.external.atsumaru).comment.resetAndChangeScene("title");
				}
				return false;
			}
		});
	}

	onSpinnerValueChanged(value: number) {
		if (this.game.external.atsumaru) {
			(<AtsumaruGameAPI>this.game.external.atsumaru).comment.pushContextFactor("" + value);
		}
		this.config.seed = value;
	}
}
