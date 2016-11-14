var gulp = require('gulp');

require('@recipher/gulp')(gulp, { test: { coverage: 40 }});

gulp.task('default', [ 'test' ]);
