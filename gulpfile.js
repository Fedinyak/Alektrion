var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function() {
  return gulp
    .src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"));
});

gulp.task("server", function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  // gulp.watch("source/less/**/*.less", gulp.series("css"));
  // gulp.watch("source/*.html", gulp.series("html", "refresh"));
  // // gulp.watch("source/js/*.js", gulp.series("min-js", "refresh"));

  gulp
    .watch("source/less/**/*.less", gulp.series("css"))
    .on("change", server.reload);
  gulp.watch("source/*.html").on("change", server.reload);
  // gulp.watch("source/js/*.js", gulp.series("min-js", "refresh"));
});

gulp.task("start", gulp.series("css", "server"));

// "use strict";
// var gulp = require("gulp");
// var imagemin = require("gulp-imagemin");
// var plumber = require("gulp-plumber");
// var sourcemap = require("gulp-sourcemaps");
// var rename = require("gulp-rename");
// var less = require("gulp-less");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var server = require("browser-sync").create();
// var csso = require("gulp-csso");
// var webp = require("gulp-webp");
// var del = require("del");
// var posthtml = require("gulp-posthtml");
// var include = require("posthtml-include");
// var minify = require("gulp-minifier");

// gulp.task("clean", function() {
//   return del("build");
// });

// gulp.task("copy", function() {
//   return gulp
//     .src(
//       [
//         "source/fonts/**/*.{woff,woff2}",
//         "source/img/sprite.svg",
//         //"source/js/**",
//         "source/*.ico",
//         "source/css/style.css"
//       ],
//       {
//         base: "source"
//       }
//     )
//     .pipe(gulp.dest("build"));
// });

// gulp.task("css", function() {
//   return gulp
//     .src("source/less/style.less")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(less())
//     .pipe(postcss([autoprefixer()]))
//     .pipe(csso())
//     .pipe(rename("style.min.css"))
//     .pipe(sourcemap.write("."))
//     .pipe(gulp.dest("build/css"))
//     .pipe(server.stream());
// });

// gulp.task("min-js", function() {
//   return gulp
//     .src("source/js/*.js")
//     .pipe(
//       minify({
//         minify: true,
//         minifyJS: {
//           sourceMap: true
//         }
//       })
//     )
//     .pipe(gulp.dest("build/js"));
// });

// gulp.task("html", function() {
//   return gulp
//     .src("source/*.html")
//     .pipe(posthtml([include()]))
//     .pipe(gulp.dest("build"));
// });

// gulp.task("min-html", function() {
//   return gulp
//     .src("build/*.html")
//     .pipe(
//       minify({
//         minify: true,
//         minifyHTML: {
//           collapseWhitespace: true,
//           conservativeCollapse: true
//         }
//       })
//     )
//     .pipe(gulp.dest("build/"));
// });

// gulp.task("images", function() {
//   return gulp
//     .src("source/img/**/*.{png,jpg}")
//     .pipe(
//       imagemin([
//         imagemin.optipng({ optimizationLevel: 3 }),
//         imagemin.mozjpeg({ progressive: true })
//       ])
//     )
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("svg", function() {
//   return gulp
//     .src("source/img/svg/*.svg")
//     .pipe(imagemin([imagemin.svgo()]))
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("webp", function() {
//   return gulp
//     .src("source/img/**/*.{png,jpg}")
//     .pipe(webp({ quality: 90 }))
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("server", function() {
//   server.init({
//     server: "build/",
//     notify: false,
//     open: true,
//     cors: true,
//     ui: false
//   });

//   gulp.watch("source/less/**/*.less", gulp.series("css"));
//   gulp.watch("source/*.html", gulp.series("html", "refresh"));
//   gulp.watch("source/js/*.js", gulp.series("min-js", "refresh"));
// });

// gulp.task("refresh", function(done) {
//   server.reload();
//   done();
// });

// gulp.task(
//   "build",
//   gulp.series(
//     "clean",
//     "copy",
//     "css",
//     "images",
//     "svg",
//     "webp",
//     "min-js",
//     "html",
//     "min-html"
//   )
// );

// gulp.task("start", gulp.series("build", "server"));
