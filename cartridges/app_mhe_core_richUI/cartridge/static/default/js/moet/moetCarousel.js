!function(a){"use strict";a.fn.moetCarousel=function(){return this.each(function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p=a(c),q=p.data("mcaro"),r=p.find("li"),s=r.find("div.product-tile"),t=s.parents("li").addClass("in"),u=(a("#categoryProducts li:not(.in)").remove(),d=0===t.length?r:t,p.find("li:first").addClass("active"),d.length),v=q.speed,w=q.productShow,x=d.width(),y=x*w,z=u*x,A=p.find(".controls"),B=p.find(".prev"),C=p.find(".next"),D=p.find(".disabledLayer"),E=p.find("ul.slider"),F=E.position().left,G=(u-w)*x,H=p.find(".showCurrent"),I=(E.find("li.active").index(),p.find(".pagination")),J=(E.find("li.active"),{currentSlide:1});e=function(a){y=p.hasClass("changeCaro")?a:x*w},f=function(a,b,c){"remove"===c?b.removeClass(a):"add"===c&&b.addClass(a)},g=function(){F=E.position().left},h=function(a,b){var c="";"next"===b?c=a.next():"prev"===b&&(c=a.prev()),a.removeClass("active"),c.addClass("active")},i=function(a){H.text(J.currentSlide+" / "+u)},j=function(){for(a(E).width(z),i(),w>=u&&A.hide(),0===F&&B.addClass("disable"),b=1;u>=b;b++)I.append("<span>"+b+"</span>");I.find("span:first").addClass("active")},k=function(a,b){var c,d,g,j=E.find("li.active"),k=I.find("span.active");if("next"===b){if(d=C,c="-=",g=B,J.currentSlide==u)return;J.currentSlide=J.currentSlide++>=u?u:J.currentSlide}else if("prev"===b){if(d=B,c="+=",g=C,1==J.currentSlide)return;J.currentSlide=J.currentSlide--<=1?1:J.currentSlide}e(1200),d.hasClass("disable")?D.hide():(D.show(),E.animate({left:c+y},v,function(){D.hide(),f("disable",g,"remove"),F=E.position().left,-G>=F?f("disable",d,"add"):0===F&&f("disable",d,"add"),h(j,b),h(k,b),i(d)}))},l=function(a){var b=a.index();e(1200),J.currentSlide=b+1,i(a),a.addClass("active").siblings().removeClass("active"),E.find("li.active").removeClass("active"),E.find("li:eq("+b+")").addClass("active"),E.animate({left:"-"+b*y}),0===b?(f("disable",B,"add"),f("disable",C,"remove")):b===u-1?(f("disable",B,"remove"),f("disable",C,"add")):(f("disable",B,"remove"),f("disable",C,"remove"))},m=function(){C.on("click",function(a){D.show(),a.preventDefault(),k(a,"next")}),B.on("click",function(a){D.show(),a.preventDefault(),k(a,"prev")}),I.find("span").on("click",function(b){l(a(this))})},n=function(){p.addClass("galleryActive");var a=p.find("img");a.colorbox({href:function(){return this.src},next:"&gt;",previous:"&lt;",rel:a})},(o=function(){j(),m(),q.overlay&&n()})()})}}(jQuery);