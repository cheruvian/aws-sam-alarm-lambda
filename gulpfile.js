const gulp = require('gulp');
const eslint = require('gulp-eslint');
const zip = require('gulp-zip');

// Run JS Hint, fail if warnings are found
gulp.task('lint', () => {
  return gulp.src(['alarm-function/**.js', '!alarm-function/node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

// Zip up the source
gulp.task('zip', function() {
  const paths = [
    'alarm-function/**',
  ];
  gulp.src(paths, { base: '.' })
    .pipe(zip('alarm-function.zip'))
    .pipe(gulp.dest('build'));
});

// default runs lint, then packages the code into the build directory
gulp.task('default', ['lint', 'zip']);
gulp.task('sample', function (cb) {
  const sample = process.env.SAMPLE || 'alarm.json';
  const event = require('./sample-events/' + sample);
  require('./alarm-function').handler(event, null, cb);
});