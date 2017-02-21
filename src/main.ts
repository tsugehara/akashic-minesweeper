import {TitleScene} from "./TitleScene";

function main(param: g.GameMainParameterObject): void {
	const title = new TitleScene(g.game);
	g.game.pushScene(title);
}

export = main;
