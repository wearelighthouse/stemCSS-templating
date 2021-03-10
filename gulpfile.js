const browserSync = require('browser-sync').create();
const del = require("del");
const gulp = require("gulp");
const sass = require("gulp-sass");
const purgeCSS = require("gulp-purgecss");
const cleanCSS = require("gulp-clean-css");

var paths = {
  styles: {
    src: "assets/scss/**/*.scss",
    dest: "dist/css"
  },
  js: {
    src: "assets/js/**/*.js",
    dest: "dist/theme/dist/js"
  },
  html: ['*.html', '*.php']
};

function clean(cb) {
  return del(["dist/"]);
  cb();
}

function browserSyncInit(cb) {
  browserSync.init({
    server: true
    //proxy: 'localhost'
  });
  cb();
}

function watch(cb) {
  gulp.watch(paths.styles.src, scss);
  gulp.watch(paths.html).on('change', gulp.series(scss, browserSync.reload));
}

function scss() {
  return gulp
    .src([paths.styles.src])
    .pipe(sass({includePaths: ['./node_modules']})
    .on("error", sass.logError))
    .pipe(purgeCSS({ content: ['*.html'] }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({ stream: true }));
}

function js(cb) {
  return gulp
    .src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest));
}

exports.clean = clean;

exports.watch = gulp.series(
  gulp.parallel(
    browserSyncInit,
    scss,
    js
  ),
  watch
);

exports.default = gulp.series(
  clean,
  gulp.parallel(
    scss,
    js
  )
);
