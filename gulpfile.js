var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');//gulpを止めない
var mincss = require('gulp-clean-css');
var rename = require('gulp-rename');
var sassGlob = require("gulp-sass-glob");//importにおけるglobを有効にする
var changed = require("gulp-changed");
var imagemin = require("gulp-imagemin");

//sassをcssにコンパイル
gulp.task('sass', function(){
    return gulp.src('./app.scss') //元ファイル
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(plumber()) // 構文エラーあってもgulp止めない
    .pipe(sass({outputStyle: 'expanded'})) //オプション付けて見やすくする
    .pipe(rename('style.css'))//ファイル名の変更
    .pipe(gulp.dest('./css/src')); //出力先（cssフォルダに自動で作成される）
});

//cssを圧縮
gulp.task('mincss', function(){
    return gulp.src('./css/src/*.css')//元ファイル
    .pipe(plumber()) // 構文エラーあってもgulp止めない
    .pipe(mincss())//圧縮実行
    .pipe(rename('app.min.css'))//ファイル名と拡張子の変更
    .pipe(gulp.dest('./css'));//出力先（cssフォルダに自動で作成される）
});


//画像圧縮
var paths = {
    srcDir : './img',
    dstDir : './img/imgmin'
};
gulp.task('imagemin', function(){
    var srcGlob = paths.srcDir + '/*.+(jpg|jpeg|png|gif)';//元ファイル
    var dstGlob = paths.dstDir;//出力先(imgフォルダに自動で作成される)
    return gulp.src(srcGlob)//元ファイル
        .pipe(plumber()) // 構文エラーあってもgulp止めない
        .pipe(changed(dstGlob))//changedで変更されていないファイルだけ返す
        .pipe(imagemin([//画像圧縮の基本オプション
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]
    ))
    .pipe(gulp.dest(dstGlob));//出力
});

//watch
gulp.task('watch', function(){
    gulp.watch('./scss/**', gulp.series('sass'));//scss以下すべてのファイルをwatch
    gulp.watch('./css/src/*.css', gulp.series('mincss'));
    gulp.watch(paths.srcDir + '/*', gulp.series('imagemin'));
});