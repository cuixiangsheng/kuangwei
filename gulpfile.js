var gulp = require("gulp");//引入gulp模块
var scss = require('gulp-sass-china');//scss文件改css文件
var minifyCSS = require('gulp-minify-css');//压缩css
var connect = require('gulp-connect');//连接数据库
//var concat = require('gulp-concat');//合并
var uglify = require('gulp-uglify');//压缩js
var rename = require('gulp-rename');//重命名
gulp.task("hello",function(){
	console.log('hello')
})
gulp.task('copy-index',function(){
	return gulp.src('index.html')
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task('images',function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})
gulp.task('data',function(){
	return gulp.src(["*.json","*.txt","!package.josn"])
	.pipe(gulp.dest("dist/data"));
})
gulp.task('build',["copy-index","images","data"],function(){
	console.log("编译成功");
})
gulp.task('watch',function(){
	gulp.watch("index.html",['copy-index']);
	gulp.watch("images/**/*",["images"]);
	gulp.watch("index.scss",["scss"]);
	gulp.watch(["*.json","*.txt","!package.josn"],["data"]);
	gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
	//gulp.watch(["javascript/demo1.js", "javascript/demo2.js"],['concat']);
})
gulp.task("scss",function(){
	return gulp.src('index.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifyCSS())
	.pipe(rename('index.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})
gulp.task('server',function(){
	connect.server({
		root:'dist',
		/*port:8888*///端口号默认8080
		livereload:true
		
	})
});
gulp.task('default',["server",'watch']);

/*gulp.task('concat',function(){
	return gulp.src(["javascript/demo1.js", "javascript/demo2.js"])
	.pipe(concat("demo.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("demo.min.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})*/
gulp.task('scripts', function(){
	return gulp.src(["*.js","!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})