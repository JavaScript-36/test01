var express=require("express");
var app=new express();

var admin=require('./routes/admin.js');

var session=require("express-session");
app.use(session({                            //缓存配置中间件
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*600
    },
    rolling:true
}));

app.set("view engine","ejs"); //html页面存放位置

app.use(express.static("public")); //静态CSS,图片存放位置

app.use("/upload",express.static("upload")); //虚拟目录,动态图片存放位置

app.use('/admin',admin); //主路由入口

app.listen(3000);