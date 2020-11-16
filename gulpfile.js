var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  jsoncombine = require('gulp-jsoncombine'),

  markdownToJSON = require('gulp-markdown-to-json'),
  marked = require('marked'),

  source = './docs/',
  dest = './docs/';

function html() {
  return gulp.src(dest + '**/*.html');
}

function js() {
  return gulp.src(dest + '**/*.js');
}

function styles() {
  return gulp.src(dest + '**/*.css');
}


function markdown() {
  return gulp
    .src(source + 'slides/**/*.md')
    .pipe(markdownToJSON(marked, 'blog.json', (data, file) => {
      delete data.body;
      data.filename = file.path.split('/').pop().replace(/\.[^/.]+$/, "");
      return data;
    }))
    .pipe(jsoncombine("slideindex.json", function (data, meta) {
      return new Buffer.from(JSON.stringify(data));
    }))
    .pipe(gulp.dest(dest + 'slides'))
    .pipe(gulp.dest(dest + '_data'))
}



function watch() {
  gulp.watch(source + 'js/**/*.js', js).on('change', browserSync.reload);
  gulp.watch(source + 'css/**/*.css', styles).on('change', browserSync.reload);
  gulp.watch(source + 'index.html', html).on('change', browserSync.reload);
  gulp
    .watch(source + 'slides/**/*.md', markdown)
    .on('change', browserSync.reload);
}

function server() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: source,
    },
  });

  gulp.watch(source + 'css/**/*.css', styles).on('change', browserSync.reload);
  gulp.watch(source + 'index.html', html).on('change', browserSync.reload);
  gulp
    .watch(source + 'slides/**/*.md', markdown)
    .on('change', browserSync.reload);
}

var build = gulp.series(gulp.parallel(markdown, js, styles, html), server, watch);

gulp.task('default', build);
gulp.task('markdown', markdown);
