const del = require('del');
const gulp = require('gulp');
const minify = require('gulp-minify');

  function clean() {
      return del([ 'dist' ]);
    }

  async function compressBS3() {
        gulp.src(['src/BS3/assets/js/bs3-dropdown-submit.js'])
            .pipe(minify({
                mangle: true,
            }))
            .pipe(gulp.dest('dist/BS3/'));
    }
    async function compressBS4() {
        gulp.src(['src/BS4/assets/js/bs4-dropdown-submit.js'])
          .pipe(minify({
            mangle: true,
        }))
          .pipe(gulp.dest('dist/BS4/'));
    }

var build = gulp.series(clean, gulp.parallel(compressBS3, compressBS4));
exports.default = build;