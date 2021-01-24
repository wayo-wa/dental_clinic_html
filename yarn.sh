#!/bin/sh

yarn config set network-timeout 1000000 #タイムアウト時間を長くしておく
yarn add gulp --dev             # gulpをインストール
yarn global add gulp-cli --dev  # gulpをコマンドから使えるように（グローバルのみインストール）
yarn add gulp-sass --dev        # sassをcssにビルドする
yarn add gulp-sass-glob --dev   # sassファイルのimportをひとつにまとめる
yarn add gulp-clean-css --dev   # css圧縮
yarn add gulp-rename --dev      # 圧縮したcssファイルに.minつける
yarn add gulp-autoprefixer --dev # プレフィックス自動付与
yarn add gulp-imagemin --dev    # 画像圧縮
yarn add gulp-changed --dev     # 画像圧縮されたファイルを返す
yarn add global browserify --dev  # jsファイルをまとめるビルドする（globalとローカル両方必要らしい）
yarn add vinyl-source-stream --dev # browserifyをgulp.watchを使って自動で実行したい場合必要
yarn add jquery                 # サービスで必要なので--devなしで
yarn add gulp-plumber           # sassの構文エラーがあってもgulpを止めない
