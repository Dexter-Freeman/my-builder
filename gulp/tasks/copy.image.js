'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src('./source/images/**/*.*', { since: $.gulp.lastRun('copy:image') })
    .pipe($.gp.imagemin()) // Добавлено сжатие картинок
    .on('error', $.gp.notify.onError({ title: 'copy:image' }))  // нотификация при ошибке
    .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
