$(document).ready(function(){window.ePagesCtrl={$ePageBody:$("#ePages"),init:function(){1===this.$ePageBody.length&&this.initePageBody(this.$ePageBody)},initePageBody:function(a){var b=$("#categoryProducts .shopnow-list li").length;0==b&&$("#categoryProducts").parents(".ePageModule").remove();var c=a,d=c.find(".ePageModule"),e=d.find(".bmValue");e.each(function(a,b){var c=$(this),d=c.text();c.parents(".ePageModule").attr("data-scroll-index",1+a++),$("#header .ePageNav").append("<li data-scroll-nav='"+a++ +"'><a href=''>"+d+"</a></li>")}),$.scrollIt({topOffset:-84})}},ePagesCtrl.init();var a=$(".cross-sell .accessory-list li").length;0==a&&$(".cross-sell").css("display","none")});