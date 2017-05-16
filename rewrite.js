var htmlparser = require("htmlparser2");
var fs = require("fs");
var path = require("path");

function getScripts(data) {
	return new Promise((resolve, reject) => {
		var tagStack = [];
		var index = 0;
		var scripts = [];
		var parser = new htmlparser.Parser({
			onopentag: (name, attribs) => {
				if(name === "script" && ! attribs.src) {
					scripts[index] = {
						text: "",
						start: parser.startIndex,
						end: null
					};
					tagStack.push(true);
				} else {
					tagStack.push(false);
				}
			},
			ontext: (text) => {
				// console.log("-->", text);
				if (tagStack[tagStack.length - 1]) {
					scripts[index].text += text;
				}
			},
			onclosetag: (tagname) => {
				var tag = tagStack.pop();
				if (tag) {
					scripts[index].end = parser.endIndex;
					++index;
				}
			},
			onend: () => {
				resolve(scripts);
			}
		}, {decodeEntities: true});
		parser.write(data);
		parser.end();
	});
}
function readFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, {encoding: "utf8"}, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}
function createJs(path, script) {
	return new Promise((resolve, reject) => {
		console.log(path);
		fs.writeFile(path, script, () => {
			console.log(path);
			resolve(path);
		});
	});
}
function createJsFiles(dir, scripts) {
	return new Promise((resolve, reject) => {
		var promises = [];
		scripts.forEach((script, index) => {
			promises.push(createJs(path.join(dir, index + ".js"), script));
		});
		return Promise.all(promises).then(() => {
			resolve(scripts);
		});
	});
}
function rewriteHtml(path, scripts) {
	return new Promise((resolve, reject) => {
		console.log("rewrite!!");
		resolve(scripts);
	});
}
function copyFile(src, dist) {
	const r = fs.createReadStream(src);
	const w = fs.createWriteStream(dist);
	return new Promise((resolve, reject) => {
		r.on("error", (err) => {
			reject(err);
		});
		w.on("error", (err) => {
			reject(err);
		});
		w.on("close", () => {
			resolve();
		});
		r.pipe(w);
	});
}
function copyDirectory(src, dist) {
	return new Promise((resolve, reject) => {
		fs.readdir(src, (err, files) => {
			Promise.all(files.map((f) => copyFile(path.join(src, f), path.join(dist, f))))
				.then(resolve)
				.catch(reject);
		});
	});
}
function createDirectory(path) {
	return new Promise((resolve, reject) => {
		fs.mkdir(path, (err) => {
			// 存在チェックするよりこのエラー無視しちゃう
			// if (err) {
			// 	reject(err)
			// 	return;
			// }
			resolve();
		})
	});
}
var basePath = "html";
var htmlFile = path.join(basePath, "index.html");

createDirectory(path.join("html", "img"))
	.then(createDirectory(path.join("html", "page")))
	.then(copyDirectory(path.join("template", "page"), path.join("html", "page")))
	.then(copyDirectory(path.join("template", "css"), path.join("html", "css")))
	.then(copyFile(path.join("template", "index.html"), path.join("html", "index.html")))
	.then(copyDirectory(path.join("template", "js"), path.join("html", "js")))
	.then(() => {
		console.log("finished");
	});
