"use strict";module.exports=function(a){a.initConfig({pkg:a.file.readJSON("package.json"),compass:{dist:{options:{sassDir:"scss",cssDir:"css",specify:""}}},watch:{compass:{files:["scss/*.scss","scss/*/*.scss","scss/*/*/*.scss"],tasks:["compass"]},js:{files:["<%= jshint.all %>"],tasks:["jshint"]},all:{files:["css/style.css"]}},csslint:{options:{csslintrc:".csslintrc"},strict:{options:{"import":!1},src:["css/style.css"]}},jshint:{options:{jshintrc:".jshintrc"},all:["D:/moet_codes/updated_17_oct/cartridges/app_mhe_tom_core_richUI/cartridge/static/default/*.js"]},autoprefixer:{options:{browsers:["last 2 versions","ie 8"]},dist:{files:{"css/style.css":["css/style.css"]}}},imagemin:{dynamic:{options:{optimizationLevel:4,pngquant:!0},files:[{expand:!0,cwd:"css/img/",src:["**/*.{png,jpg,gif}"],dest:"css/img/"}]}},cssmin:{add_banner:{options:{banner:"/* Moet Selection. Minified */",keepSpecialComments:0,report:"gzip"},files:{"css/style.css":["css/style.css"]}}},base64:{webfonts:{files:{"css/fonts/webfonts/icomoon.ttf":["css/fonts/webfonts/icomoon.ttf"],"css/fonts/webfonts/icomoon.eot":["css/fonts/webfonts/icomoon.eot"],"css/fonts/webfonts/icomoon.woff":["css/fonts/webfonts/icomoon.woff"]}}}}),require("matchdep").filterDev("grunt-*").forEach(a.loadNpmTasks),a.registerTask("dev",["watch"]),a.registerTask("build",["autoprefixer","cssmin","imagemin","base64:webfonts"])};