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
		resolve(path);
		// TODO: implement fs.writeFile here
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
var basePath = "html";
var htmlFile = path.join(basePath, "index.html");
readFile(htmlFile).then((data) => {
	return getScripts(data);
}).then((scripts) => {
	return createJsFiles(basePath, scripts);
}).then((scripts) => {
	return rewriteHtml(htmlFile, scripts);
}).then(() => {
	console.log("finished.");
});