var gulp = require("gulp"),
    nodemon = require("gulp-nodemon")
    env = require("gulp-env");

gulp.task('default', function() {
  env({
    vars: {
      PORT: 8000
    }
  });
 
  nodemon({
    script: 'app.js',
    ext: 'js',
    ignore: ["./node_modules/**"] 
  })
  .on("restart", function(){
      console.log("Restarting");
  });
});

