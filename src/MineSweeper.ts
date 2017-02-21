import {BorderRect, BorderRectParameterObject} from "./BorderRect";

const gameFontSize = 24;
const gameFont = new g.DynamicFont(g.FontFamily.SansSerif, gameFontSize, g.game);

export enum GameState {
	Play,
	GameOver,
	GameClear
}

export class Cell {
	x: number;
	y: number;
	view: CellViewer;
	state: State;
	mine: boolean;
	mineCount: number;
	bombed: g.Trigger<Cell>;
	cleared: g.Trigger<Cell>;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		this.mine = false;
		this.mineCount = 0;
		this.state = State.Hidden;
		this.bombed = new g.Trigger();
		this.cleared = new g.Trigger();
	}

	bomb() {
		if (! this.mine) {
			throw new Error("invalid state!");
		}
		this.bombed.fire(this);
	}

	clear() {
		if (this.mine) {
			throw new Error("invalid state!!");
		}
		this.cleared.fire(this);
	}
}

export interface GameConfig {
	width: number;
	height: number;
	mine: number;
	seed: number;
}

export enum State {
	Unknown,
	Hidden,
	Clear,
	Bomb,
	BombHere,
	Flag
}

export class MineSweeper {
	field: Cell[][];
	random: g.RandomGenerator;
	scene: g.Scene;
	config: GameConfig;
	gameField: g.Pane;
	gameState: GameState;
	gameStateChanged: g.Trigger<GameState>;

	constructor(config: GameConfig, scene: g.Scene) {
		this.gameState = GameState.Play;

		this.gameStateChanged = new g.Trigger();
		this.gameField = new g.Pane({
			scene: scene,
			x: 0,
			y: 20,
			width: g.game.width - 20,
			height: g.game.height - 20
		});
		scene.append(this.gameField);
		this.random = new g.XorshiftRandomGenerator(config.seed);
		this.scene = scene;
		this.config = config;
		this.field = [];
		for (let x = 0; x < config.width; x++) {
			this.field[x] = [];
			for (let y = 0; y < config.height; y++) {
				this.field[x][y] = new Cell(x, y);
				this.field[x][y].bombed.handle(this, this.onBombed);
				this.field[x][y].cleared.handle(this, this.onCleared);
			}
		}

		this.setupField(this.gameField);
		this.setMines();
	}

	onBombed(cell: Cell) {
		if (this.gameState !== GameState.Play) return;

		cell.state = State.BombHere;
		for (let x = 0; x < this.field.length; x++) {
			for (let y = 0; y < this.field[x].length; y++) {
				if (this.field[x][y].mine) {
					this.field[x][y].state = this.field[x][y].state === State.BombHere ? State.BombHere : State.Bomb;
					this.field[x][y].view.updateByState();
				}
			}
		}

		this.gameState = GameState.GameOver;
		this.gameStateChanged.fire(this.gameState);
	}

	onCleared(cell: Cell) {
		if (this.gameState !== GameState.Play) return;

		const p = (x: number, y: number) => {
			if (x < 0) return;
			if (x > this.field.length - 1) return;
			if (y < 0) return;
			if (y > this.field[x].length - 1) return;
			const c = this.field[x][y];
			if (c.state !== State.Hidden && c.state !== State.Flag) return;

			c.state = State.Clear;
			c.view.updateByState();

			if (c.mineCount > 0) return;
			p(x - 1, y);
			p(x + 1, y);
			p(x, y - 1);
			p(x, y + 1);
			p(x - 1, y - 1);
			p(x - 1, y + 1);
			p(x + 1, y - 1);
			p(x + 1, y + 1);
		};
		cell.state = State.Clear;
		cell.view.updateByState();
		if (cell.mineCount > 0) {
			this.clearGame();
			return;
		}
		p(cell.x + 1, cell.y);
		p(cell.x - 1, cell.y);
		p(cell.x, cell.y + 1);
		p(cell.x, cell.y - 1);
		p(cell.x + 1, cell.y - 1);
		p(cell.x + 1, cell.y + 1);
		p(cell.x - 1, cell.y - 1);
		p(cell.x - 1, cell.y + 1);

		this.clearGame();
	}

	clearGame(): boolean {
		for (let x = 0; x < this.field.length; x++) {
			for (let y = 0; y < this.field[x].length; y++) {
				if ((! this.field[x][y].mine) && (this.field[x][y].state !== State.Clear)) return false;
			}
		}

		for (let x = 0; x < this.field.length; x++) {
			for (let y = 0; y < this.field[x].length; y++) {
				if (this.field[x][y].mine) {
					this.field[x][y].state = State.Bomb;
					this.field[x][y].view.updateByState();
				}
			}
		}

		this.gameState = GameState.GameClear;
		this.gameStateChanged.fire(this.gameState);
		return true;
	}

	setMines() {
		for (let i = 0; i < this.config.mine; i++) {
			do {
				const x = this.random.get(0, this.field.length - 1);
				const y = this.random.get(0, this.field[x].length - 1);
				if (! this.field[x][y].mine) {
					this.field[x][y].mine = true;
					break;
				}
			} while(true);
		}
		for (let x = 0; x < this.field.length; x++) {
			for (let y = 0; y < this.field[x].length; y++) {
				this.field[x][y].mineCount = this.calculateMineCount(x, y);
			}
		}
	}

	getWidth(parent: g.E | g.Scene) {
		if (parent instanceof g.Scene) {
			return parent.game.width;
		}
		return parent.width;
	}

	getHeight(parent: g.E | g.Scene) {
		if (parent instanceof g.Scene) {
			return parent.game.height;
		}
		return parent.height;
	}

	setupField(parent: g.E | g.Scene) {
		const w = this.getWidth(parent) / this.field.length | 0;
		const h = this.getHeight(parent) / this.field[0].length | 0;
		for (let x = 0; x < this.field.length; x++) {
			for (let y = 0; y < this.field[x].length; y++) {
				const view = new CellViewer(this.field[x][y], this.scene, x, y, w, h);
				view.x = x * w;
				view.y = y * h;
				parent.append(view);
				view.modified();
				this.field[x][y].view = view;
			}
		}
	}

	calculateMineCount(centerX: number, centerY: number) {
		const xs: number[] = [];
		const ys: number[] = [];
		xs.push(centerX);
		if (centerX > 0) xs.push(centerX - 1);
		if (centerX < this.field.length - 1) xs.push(centerX + 1);
		ys.push(centerY);
		if (centerY > 0) ys.push(centerY - 1);
		if (centerY < this.field[centerY].length - 1) ys.push(centerY + 1);

		return xs.reduce((px, cx) => {
			return px + ys.reduce((py: number, cy: number) => {
				if (cx === centerX && cy === centerY) return py;
				return py + (this.field[cx][cy].mine ? 1 : 0);
			}, 0);
		}, 0);
	}
}

export class CellViewer extends g.E {
	cell: Cell;
	bg: BorderRect;
	text: g.Label;

	constructor(cell: Cell, scene: g.Scene, x: number, y: number, width: number, height: number) {
		super({
			scene: scene,
			width: width,
			height: height
		});
		this.cell = cell;
		this.bg = new BorderRect({
			scene: scene,
			x: 0,
			y: 0,
			width: width,
			height: height,
			// デバッグ用: cssColor: field[x][y].mine ? "#000000" : "#aaaaaa",
			cssColor: "#aaaaaa",
			borderWidth: 1,
			borderColor: "#ff0000",
			touchable: true,
			parent: this
		});
		this.bg.pointDown.handle(this, this.onPointDown);
		this.text = new g.Label({
			scene: scene,
			x: 0,
			y: 0,
			width: width,
			height: (height - gameFontSize) / 2 | 0,
			font: gameFont,
			fontSize: gameFontSize,
			textAlign: g.TextAlign.Center,
			text: "",
			textColor: "#0000ff",
			parent: this
		});
	}

	onPointDown(e: g.PointDownEvent) {
		if (this.cell.mine) {
			this.cell.bomb();
		} else {
			this.cell.clear();
		}
	}

	modified(isBubbling?: boolean) {
		super.modified(isBubbling);
		if (this.bg && this.text) this.updateByState();
	}

	updateByState() {
		switch (this.cell.state) {
			case State.Bomb:
				this.bg.cssColor = "#000000";
				this.bg.modified();
				if (this.text.text !== "") {
					this.text.text = "";
					this.text.invalidate();
				}
			break;
			case State.BombHere:
				this.bg.cssColor = "#ff0000";
				this.bg.modified();
				if (this.text.text !== "") {
					this.text.text = "";
					this.text.invalidate();
				}
			break;
			case State.Clear:
				this.bg.cssColor = "#ffffff";
				this.bg.modified();
				this.text.text = "" + this.cell.mineCount;
				this.text.invalidate();
			break;
			case State.Flag:
				this.text.text = "旗";
				this.text.invalidate();
			break;
			case State.Hidden:
				this.bg.cssColor = "#aaaaaa";
				this.bg.modified();
				if (this.text.text !== "") {
					this.text.text = "";
					this.text.invalidate();
				}
			break;
			default:
				throw new Error("invalid cell state");
		}
	}
}
