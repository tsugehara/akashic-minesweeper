export class ResultScene extends g.Scene {
	isClear: boolean;
	constructor(game: g.Game, isClear: boolean) {
		super({
			game: game,
			assetIds: ["clear", "gameover"]
		});
		this.isClear = isClear;
		this.pointDownCapture.handle(this, this.onPointDownCapture);
		this.loaded.handle(this, this.onLoaded);
	}

	onPointDownCapture() {
		this.end();
	}

	onLoaded() {
		const assetId = this.isClear ? "clear" : "gameover";
		const asset = <g.ImageAsset>this.assets[assetId];
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
