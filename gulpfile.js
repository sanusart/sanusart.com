var gulp = require('gulp');
var sass = require('gulp-sass');
var childProcess = require('child_process');
var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('move-fonts', function() {
    gulp.src('assets/font-awesome/fonts/*')
        .pipe(gulp.dest('fonts/'));
});

gulp.task('jekyll-build', function(done) {
    return childProcess.spawn('jekyll', ['build'], {
            stdio: 'inherit'
        })
        .on('close', done);
});

gulp.task('dev', ['sass', 'js', 'css', 'html'], function (done) {
    return childProcess.spawn('jekyll', ['serve','--baseurl','-w'], {
        stdio: 'inherit'
    })
        .on('close', done);
});

gulp.task('sass', function() {
    gulp.src('css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('css', ['move-fonts'], function() {
    gulp.src([
        'assets/normalize.css/normalize.css',
        'assets/font-awesome/css/font-awesome.min.css',
        'assets/highlightjs/styles/monokai_sublime.css',
        'assets/hint.css/hint.min.css',
        'css/main.css'
    ])
        .pipe(concat('style.css'))
        .pipe(minifyCSS({keepSpecialComments:0}))
        .pipe(gulp.dest('css/'));
});

gulp.task('js', function() {
    gulp.src([
        'assets/modernizer/modernizr.js',
        'assets/jquery/dist/jquery.min.js',
        'assets/highlightjs/highlight.pack.js',
        'assets/instantclick/instantclick.js',
        'js/main.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

gulp.task('html', ['jekyll-build'], function() {
    var opts = {
        comments: false,
        spare: true
    };
    gulp.src([
        '_site/**/*.html'
    ])
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('_site/'))
});

gulp.task('watch',['dev'], function() {
    gulp.watch('js/main.js',['dev']);
    //gulp.watch('./**/*.md',['minify-html']);
    //gulp.watch(['./**/*.html','!./site/**/*.html'],['minify-html']);
    gulp.watch('css/main.scss',['dev']);
});

/**
 * Compile the jekyll site
 */
gulp.task('default', ['sass', 'js', 'css', 'html']);