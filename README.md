# template

template.

## install

```
npm install
```
<!-- bower install -->

## tasks

### start

- `npm start`
    - `gulp`でも可

- 現在のソースからビルドし、開発用サーバーを起動、ファイルの監視を開始します
    - `gulp server` `gulp build` `gulp watch`と同じです
    - `gulp --develop`でjs,cssをminifyしないようにできます
    - `gulp --port 0000`でportを指定できます

### server

- `npm run server`
    - `gulp server`でも可

- 開発用のサーバーを起動します

### build

- `npm run build`
    - `gulp`でも可

- html・css・jsのビルドが走ります

### watch

- `npm run watch`
    - `gulp watch`でも可

- html・css・jsのソースファイルを監視し、変更があればそれぞれのビルドを実行します

### 個別ビルド

#### html
- `build-html`
    - `gulp html`でも可

#### css
- `build-css`
    - `gulp css`でも可

#### js
- `build-js`
    - `gulp js`でも可
