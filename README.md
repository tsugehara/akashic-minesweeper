# typescript-game-sample

**typescript-game-sample**はTypeScriptでAkashicのゲームを作る際のサンプルプロジェクトです。

## ビルド方法

ビルドにはNode.jsが必要です。

`npm run build` によりgulpを使ってビルドできます。

`src` ディレクトリ以下のTypeScriptファイルがコンパイルされ、`game/script` ディレクトリ以下にJavaScriptファイルが生成されます。

`npm run build` は自動的に `akashic-cli update asset script` を実行するので、`game/game.json` の更新が行われます。

```sh
npm install
npm run build
```

## テスト方法

1. [TSLint](https://github.com/palantir/tslint "TSLint")を使ったLint
2. [Jasmine](http://jasmine.github.io "Jasmine")を使ったテスト

がそれぞれ実行されます。

```sh
npm test
```

テストコードのサンプルとして `spec/testSpec.js` を用意していますので参考にしてテストコードを記述して下さい。

## 実行方法

以下のどちらかを実行後、ブラウザで `http://localhost:3000/game/` にアクセスすることでゲームを実行できます。

* `npm install -g @akashic/akashic-sandbox` 後、 `game` ディレクトリで `akashic-sandbox`

* `npm start`

# TypeScriptライブラリ利用時の注意

ゲームにTypeScriptライブラリを利用する場合、このディレクトリで `npm install --save package_name` を実行した後、game/以下で `akashic-cli install package_name` する必要があります。

## テスト方法

`npm i` は2回目以降省略可能。

プラグインを更新するなら以下の手順を実行してから、ブラウザで `http://localhost:3000` にアクセス。

```sh
npm i
cd plugin
npm i
npm run deploy
cd ..
npm start
```

HTMLで見るなら以下の手順を実行してから、html以下のHTMLを開く（htmlフォルダ内のファイルはまとめて消えて再作成される点に注意）。

```sh
npm i
npm run build
cd plugin
npm i
npm run deploy
cd ..
npm run export
```

