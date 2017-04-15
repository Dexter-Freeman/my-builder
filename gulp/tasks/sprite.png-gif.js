'use strict';



module.exports = function() {
  $.gulp.task('sprite:png-gif', function() {

    let merge = require('merge-stream');

    let spriteData = $.gulp.src('./source/sprite/*.png')
    .pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite-png.scss',
      padding: 2
    }));


    let cssStream = spriteData.css
    .pipe($.gulp.dest('./source/style'));

    let imgStream = spriteData.img
   // .pipe($.gp.imagemin())
   .pipe($.gulp.dest($.config.root + '/assets/img'));


   return merge(imgStream, cssStream);

// return
//     spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')); // Путь куда сохраняем картинку
//     spriteData.css.pipe($.gulp.dest('./source/style')); // Путь куда сохраняем стили



})
};
