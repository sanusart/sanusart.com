var gulp = require('gulp');
var sass = require('gulp-sass');
var childProcess = require('child_process');
var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');
var connect = require('gulp-connect');

gulp.task('move-fonts', function(){
    gulp.src('./assets/font-awesome/fonts/*')
        .pipe(gulp.dest('./fonts/'));
});

gulp.task('jekyll-build', function (done) {
    return childProcess.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('server', ['jekyll-build'], function () {
    connect.server({
        root: './_site',
        port: '4000',
        livereload: true
    });
});

gulp.task('sass', function () {
    gulp.src('./css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('css',['move-fonts'], function () {
    gulp.src([
        './assets/normalize.css/normalize.css',
        './assets/font-awesome/css/font-awesome.min.css',
        './assets/highlightjs/styles/monokai_sublime.css',
        './css/main.css'
    ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('js', function () {
    gulp.src([
            './assets/jquery/dist/jquery.min.js',
            './assets/highlightjs/highlight.pack.js',
            './assets/instantclick/instantclick.js',
            './js/main.js'])
//        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./js/'))
});

gulp.task('html', ['jekyll-build'], function () {
    var opts = {comments: false, spare: true};
    gulp.src([
        './_site/**/*.html'
    ])
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./_site/'))
});

gulp.task('watch',function() {
    //gulp.watch('./js/*.js',['minify-js','minify-html']);
    //gulp.watch('./**/*.md',['minify-html']);
    //gulp.watch(['./**/*.html','!./site/**/*.html'],['minify-html']);
    //gulp.watch('./css/**',['minify-html']);
});

/**
 * Compile the jekyll site & watch files.
 */
gulp.task('default', ['sass','js','css','html']);