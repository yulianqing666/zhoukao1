var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var webserver = require("gulp-webserver");
var urlTool = require('url')
var qs = require('qs')



var list = [
    {
        name:'百度',
        where:'北京市带点去西北玩',
        what:'互联网 | 已上市 | 10000以上',
        but:'热诈阿萨德科技爱上了肯德基离开 拉丝机的琳姐',
    },
    {
        name:'北京来为科技',
        where:'北京昌平',
        what:'互联网 | 已上市 | 10000以上',
        but:'热诈阿了肯德基离开 拉丝机的琳姐',
    },
    {
        name:'最库教育',
        where:'北京市五棵松',
        what:'互联网 | 已上市 | 10000以上',
        but:'热诈阿萨德科技爱上了的琳姐',
    },
    {
        name:'京东集团内',
        where:'北京市大兴区',
        what:'互联网 | 已上市 | 10000以上',
        but:'热诈阿萨德科机的琳姐',
    },
]

gulp.task('mockserver',function(){
    gulp.src('.')
        .pipe(webserver({
            port:3000,
            middleware:function(req,res,next){

                var method = req.method,
                    url = urlTool.parse(req.url),
                    pathname = url.pathname,
                    getParams = qs.parse(url.query) 

                res.setHeader('Access-Control-Allow-Origin','*');

                if (method === 'GET'){

                }else if(method === 'GET'){

                }else{

                }
        }
    }))
})

    gulp.task('webserver', function () {
        gulp.src('./')
            .pipe(webserver({
                livereload: true,
                open: true,
                port: 8080,
                host: "localhost",
                fallback: 'index.html'
            }));
    });

    gulp.task("minifyCss", function () {
        gulp.src("./css/*.css")
            .pipe(concat("bundle.css"))
            .pipe(minifyCss())
            .pipe(gulp.dest("./css"))
    });
        
    gulp.task("minifyjs", function () {
        gulp.src("js/script.js")
            .pipe(concat("script.min.js"))
            .pipe(uglify())
            .pipe(gulp.dest("./js"));
    });



gulp.task('default',['mockserver,webserver,minifyjs,minifyCss'])