import {GameScene} from "./GameScene";
export class ResultScene extends g.Scene {
	isClear: boolean;
	gameSprite: g.Sprite;
	constructor(game: g.Game, isClear: boolean, gameScene: GameScene) {
		super({
			game: game
		});
		this.gameSprite = g.Util.createSpriteFromScene(this, gameScene);
		this.isClear = isClear;
		this.pointDownCapture.handle(this, this.onPointDownCapture);
		this.loaded.handle(this, this.onLoaded);
	}

	onPointDownCapture() {
		this.end();
	}

	onLoaded() {
		const assetId = this.isClear ? "clear" : "gameover";
		const asset = <g.ImageAsset>this.game.assets[assetId];
		this.append(this.gameSprite);
		new g.Sprite({
			scene: this,
			x: (this.game.width - asset.width) / 2,
			y: (this.game.height - asset.height) / 2,
			width: asset.width,
			height: asset.height,
			src: asset,
			parent: this
		});
	}
}
