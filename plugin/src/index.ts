export interface AtsumaruPluginParamter {
	atsumaru: AtsumaruGameAPI;
	game: g.Game;
	gameDriver: any;
	amflow: any;
	gdr: any;
}
export function init(param: AtsumaruPluginParamter) {
	param.game.external.atsumaru = new AtsumaruPlugin(param);
}

export class AtsumaruAPI {
	atsumaru: AtsumaruGameAPI;
	game: g.Game;
	gameDriver: any;
	amflow: any;
	gdr: any;

	constructor(param: AtsumaruPluginParamter) {
		this.atsumaru = param.atsumaru;
		this.game = param.game;
		this.gameDriver = param.gameDriver;
		this.amflow = param.amflow;
		this.gdr = param.gdr;
	}
}

export class AtsumaruPlugin {
	storage: StorageAPI;
	comment: CommentAPI;
	// controller: ControllerAPI;

	constructor(param: AtsumaruPluginParamter) {
		this.storage = new StorageAPI(param);
		this.comment = new CommentAPI(param);
	}

}

export class StorageAPI extends AtsumaruAPI {
	saveCurrentPlaylog(slotId: string) {
		// 動かない・・
		const dump = this.amflow.dump();
		const jsonData = {
			tickList: dump.tickList,
			startPoints: dump.staratPoints,
			fps: this.game.fps
		};
		return this.save(slotId, jsonData);
	}

	loadPlaylog(slotId: string) {
		// TODO
	}

	listPlaylog() {
		// TODO
	}

	save(slotId: string, data: any): Promise<void> {
		return this.atsumaru.storage.getItems().then((items) => {
			let matched = false;
			for (let i = 0; i < items.length; i++) {
				if (items[i].key === slotId) {
					items[i].value = data;
					matched = true;
					break;
				}
			}
			if (! matched) {
				items.push({
					key: slotId,
					value: data
				});
			}
			return this.atsumaru.storage.setItems(items);
		});
	}

	load(slotId: string): Promise<string> {
		return this.atsumaru.storage.getItems().then((items) => {
			const targetItems = items.filter((item) => item.key === slotId);
			if (targetItems.length === 0) {
				return Promise.reject<string>(new Error(slotId + " not found."));
			}
			return Promise.resolve(targetItems[0].value);
		});
	}

	remove(slotId: string): Promise<void> {
		return this.atsumaru.storage.removeItem(slotId);
	}
}

export class CommentAPI extends AtsumaruAPI {
	autoChangeScene: boolean;
	sceneIndex: number;

	constructor(param: AtsumaruPluginParamter) {
		super(param);
		this.sceneIndex = 0;
		this.autoChangeScene = false;
		param.game._sceneChanged.handle(this, this.onSceneChanged);
	}

	pushContextFactor(factor: string) {
		return this.atsumaru.comment.pushContextFactor(factor);
	}

	pushMinorContext() {
		return this.atsumaru.comment.pushMinorContenxt();
	}

	resetAndChangeScene(sceneName: string) {
		return this.atsumaru.comment.resetAndChangeScene(sceneName);
	}

	changeScene(sceneName: string) {
		return this.atsumaru.comment.changeScene(sceneName);
	}

	setContext(context: string) {
		return this.atsumaru.comment.setContext(context);
	}

	onSceneChanged(scene: g.Scene) {
		this.sceneIndex++;
		if (this.autoChangeScene) {
			this.atsumaru.comment.changeScene(scene.name || "" + this.sceneIndex);
		}
	}
}

// TODO: あとで
// export class ControllerAPI extends AtsumaruAPI {
// 	subscrive(observer: Observer) {
// 		return RPGAtsumaru.controllers.defaultController.subscribe(observer);
// 	}
// }
