var gulp = require('gulp');

//我的第一个gulp程序
//运行：gulp ,初次跑就不顺利，遇到了错误 Local gulp not found in，还要有gulp作为项目依赖安装方法$ npm install --save-dev gulp，折腾半天终于跑起来了。

gulp.task('default', function() {
  console.log('hello gulp');
});