import {Button} from "./Button";

export interface CancellableEvent<T> {
	cancel?: boolean;
	target: g.E;
	data: T;
}

export interface SpinnerParameterObject extends g.EParameterObject {
	upButtonImage: g.Surface;
	upPushedImage: g.Surface;
	downButtonImage: g.Surface;
	downPushedImage: g.Surface;
	text?: g.Label;
	font?: g.Font;
	minValue?: number;
	maxValue?: number;
	value: number;
}

export class Spinner extends g.E {
	up: Button;
	down: Button;
	text: g.Label;
	font: g.Font;
	valueChanging: g.Trigger<CancellableEvent<number>>;
	valueChanged: g.Trigger<number>;
	minValue: number;
	maxValue: number;
	value: number;

	constructor(param: SpinnerParameterObject) {
		super(param);
		this.valueChanging = new g.Trigger();
		this.valueChanged = new g.Trigger();
		this.minValue = param.minValue;
		this.maxValue = param.maxValue;
		this.value = param.value;
		// TODO: fontSize指定や型指定による自動レイアウト調整
		// TODO: このコードはfontSize = 64, 桁数4固定
		this.up = new Button({
			scene: this.scene,
			buttonImage: param.upButtonImage,
			pushedImage: param.upPushedImage,
			x: -80,
			y: 23,
			width: param.upButtonImage.width,
			height: param.upButtonImage.height
		});
		this.down = new Button({
			scene: this.scene,
			buttonImage: param.downButtonImage,
			pushedImage: param.downPushedImage,
			x: 88,
			y: 23,
			width: param.downButtonImage.width,
			height: param.downButtonImage.height
		});
		this.font = param.font ? param.font : null;
		this.text = param.text ? param.text : new g.Label({
			scene: this.scene,
			font: this.font,
			fontSize: this.font.size,
			text: "" + this.value,
			textAlign: g.TextAlign.Center,
			widthAutoAdjust: false,
			width: 50,
			height: 62,
			x: 0,
			y: 0
		});
		this.up.clicked.handle(this, this.onUp);
		this.down.clicked.handle(this, this.onDown);
		this.append(this.text);
		this.append(this.up);
		this.append(this.down);
	}

	changeValue(value: number) {
		while (value < this.minValue)
			value = (this.maxValue + 1 - (this.minValue - value));
		while (value > this.maxValue)
			value = (this.minValue - 1 + (value - this.maxValue));
		const e: CancellableEvent<number> = {
			target: this,
			data: value
		};
		this.valueChanging.fire(e);
		if (e.cancel) return;

		this.value = value;
		this.valueChanged.fire(this.value);

		this.text.text = "" + this.value;
		this.text.invalidate();
	}

	onUp() {
		this.changeValue(this.value - 1);
	}

	onDown() {
		this.changeValue(this.value + 1);
	}

	// TODO: upやdownを外部からもらっちゃうと、このタイミングでついでにdestroyしてしまうな・・
	destroy() {
		super.destroy();
	}
}
