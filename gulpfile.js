'use strict';

// Описываем глобальную переменную "$" в которой описываем свойства к которым будем обращаться в других файлах
global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

// Используем глобальную переменную "$" и ее свойство "path" у которого используем свойство "task" для того чтобы реквайрить все таски
$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});


// Используем глобальную переменную "$" и ее свойство "gulp"  для описания дефолтного таска
$.gulp.task('default', $.gulp.series(
  'clean',
  'sprite:png-gif',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:fonts',
    'css:foundation',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
