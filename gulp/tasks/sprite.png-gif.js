'use strict';

module.exports = function() {
  $.gulp.task('sprite:png-gif', function() {
    return $.gulp.src('./source/sprite/*.png}')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite-png.scss',
        padding: 2
      }))
     $.gt.gutil.log('sprite take files')
      .pipe($.gulp.dest($.config.root + '/assets/img'))
      .on('error', $.gp.notify.onError({ title: 'sprite:png-gif' }))
  })
};
