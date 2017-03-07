export interface CellViewParameterObject extends g.EParameterObject {
	font: g.Font;
	openBg: g.Surface;
	closeBg: g.Surface;
	value: number;
}
export class CellView extends g.E {
	font: g.Font;
	closeBg: g.Surface;
	openBg: g.Surface;
	value: number;
	isOpen: boolean;
	label: g.Label;

	constructor(param: CellViewParameterObject) {
		super(param);
		this.font = param.font;
		this.closeBg = param.closeBg;
		this.openBg = param.openBg;
		this.value = param.value;
		this.isOpen = false;
		const fontSize = this.height / 2 | 0;
		this.label = new g.Label({
			scene: this.scene,
			x: 0,
			y: (this.height / 2 - fontSize / 2) | 0,	// TODO: 謎数字すぎるので後で詰める
			width: this.width,
			height: this.height,
			font: this.font,
			fontSize: fontSize,
			textAlign: g.TextAlign.Center,
			widthAutoAdjust: false,
			text: "" + this.value
		});
	}

	changeValue(value: number) {
		this.value = value;
		this.label.text = "" + this.value;
		this.label.invalidate();
	}

	open() {
		this.isOpen = true;
		if (this.value > 0) {
			this.append(this.label);
		}
		this.modified();
	}

	close() {
		this.isOpen = false;
		if (this.label.parent) {
			this.label.remove();
		}
		this.modified();
	}

	renderSelf(renderer: g. Renderer): boolean {
		if (this.isOpen) {
			renderer.drawImage(
				this.openBg,
				0,
				0,
				this.width,
				this.height,
				0,
				0
			);
		} else {
			renderer.drawImage(
				this.closeBg,
				0,
				0,
				this.width,
				this.height,
				0,
				0
			);
		}
		
		return super.renderSelf(renderer);
	}
}
