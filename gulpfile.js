let gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', ()=>{
    console.log("woop woop");
})

gulp.task('html', () => {
    console.log('blah blah');
})
gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch', () => {
    watch('./app/index.html', ()=>{
        gulp.start('html');
    })
    watch('./app/assets/styles/**/*.css', ()=>{
        gulp.start('styles');
    })
})
