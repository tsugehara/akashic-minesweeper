export interface BorderRectParameterObject extends g.FilledRectParameterObject {
	borderColor?: string;
	borderWidth?: number;
}

export class BorderRect extends g.FilledRect {
	borderColor: string;
	borderWidth: number;

	constructor(param: BorderRectParameterObject) {
		super(param);
		this.borderColor = param.borderColor ? param.borderColor : null;
		this.borderWidth = param.borderWidth ? param.borderWidth : 1;
	}

	renderSelf(renderer: g. Renderer): boolean {
		if (this.borderColor) {
			renderer.fillRect(
				0,
				0,
				this.width,
				this.height,
				this.borderColor
			);
			renderer.fillRect(
				this.borderWidth,
				this.borderWidth,
				this.width - this.borderWidth * 2,
				this.height - this.borderWidth * 2,
				this.cssColor
			);
		} else {
			super.renderSelf(renderer);
		}
		return false;
	}
}
