export interface CancellableEvent<T> {
	cancel?: boolean;
	target: g.E;
	data: T;
}

export interface SpinnerParameterObject extends g.EParameterObject {
	up?: g.E;
	down?: g.E;
	upSrc?: g.Asset | g.Surface;
	downSrc?: g.Asset | g.Surface;
	text?: g.Label;
	font?: g.Font;
	minValue?: number;
	maxValue?: number;
	value: number;
}

export class Spinner extends g.E {
	up: g.E;
	down: g.E;
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
		this.up = (param.up ? param.up : (param.upSrc ? new g.Sprite({
			scene: this.scene,
			src: param.upSrc,
			touchable: true,
			x: 0,
			y: 0
		}) : null));
		this.down = (param.down ? param.down : (param.downSrc ? new g.Sprite({
			scene: this.scene,
			src: param.downSrc,
			touchable: true,
			x: 384,
			y: 0
		}) : null));
		this.font = param.font ? param.font : null;
		this.text = param.text ? param.text : new g.Label({
			scene: this.scene,
			font: this.font,
			fontSize: 64,
			text: "" + this.value,
			textAlign: g.TextAlign.Center,
			widthAutoAdjust: false,
			width: 64 * 4,
			height: 64,
			x: 64,
			y: 0
		});
		this.up.pointDown.handle(this, this.onUp);
		this.down.pointDown.handle(this, this.onDown);
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
