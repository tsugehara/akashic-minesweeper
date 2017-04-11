export interface ButtonParameterObject extends g.EParameterObject {
	buttonImage: g.Surface;
	pushedImage?: g.Surface;
}

export enum ButtonState {
	Normal,
	Pushed
}

export class Button extends g.E {
	buttonImage: g.Surface;
	pushedImage: g.Surface;
	clicked: g.Trigger<void>;
	buttonState: ButtonState;

	constructor(param: ButtonParameterObject) {
		super(param);
		this.buttonImage = param.buttonImage;
		this.pushedImage = param.pushedImage;
		this.touchable = true;
		this.clicked = new g.Trigger<void>();
		this.pointDown.handle(this, this.onPointDown);
		this.pointUp.handle(this, this.onPointUp);
		this.buttonState = ButtonState.Normal;
	}

	onPointDown(e: g.PointDownEvent) {
		this.buttonState = ButtonState.Pushed;
		this.modified();
	}

	onPointUp(e: g.PointUpEvent) {
		// TODO: 本当は範囲外だったら発火しないとかやりたい
		this.clicked.fire();
		this.buttonState = ButtonState.Normal;
		this.modified();
	}

	renderSelf(renderer: g. Renderer): boolean {
		if (this.buttonState === ButtonState.Pushed && this.pushedImage) {
			renderer.drawImage(
				this.pushedImage,
				0,
				0,
				this.width,
				this.height,
				0,
				0
			);
		} else {
			renderer.drawImage(
				this.buttonImage,
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