const gulp = require("gulp");
const bs = require("browser-sync").create("dev");
const sass = require("gulp-dart-sass");

bs.init({ server: true, });

gulp.task("sass", function () {
  return gulp
    .src("css/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./css")) // use relative paths
    .pipe(bs.stream());
});

gulp.task(
  "files:watch",
  gulp.series("sass", function () {
    gulp.watch("css/**/*.scss", gulp.series("sass"));
    bs.watch(["*.html", "css/*"]).on("change", bs.reload);
  })
);

gulp.task('default', gulp.series('files:watch'));
