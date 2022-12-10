const gulp = require('gulp');
const argv = require('yargs').argv;
const projectConfig = require('./projectConfig.json');
const path = projectConfig.path;
const browserSync = require('browser-sync').create();
const nunjucks = require('gulp-nunjucks');

/**
 * Dev check
 */
const isDev = function() {
  return !argv.prod;
}

/**
 * Prod check
 */
 const isProd = function() {
  return !!argv.prod;
}

path.src.html[0] =  path.src.srcPath + path.src.html[0];
path.src.html[1] =  "!" + path.src.html[0].slice(0, -6) + "_*.html";
path.src.html[2] =  "!" + path.src.srcPath + "/assets";
path.src.html[3] =  "!" + path.src.srcPath + "/_html";

path.dist.html = path.dist.distPath + path.dist.html;
path.dist.style = path.dist.distPath + path.dist.html;

function njk() {
  return gulp.src(path.src.html)
      .pipe(nunjucks.compile())
      .pipe(gulp.dest(path.dist.html))
      .on('end', browserSync.reload);
}
exports.njk = njk;

function browsersync() {
  browserSync.init({
          open: true,
          server: path.dist.distPath
  });
}
exports.default = browsersync;