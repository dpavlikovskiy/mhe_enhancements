!function(a,b,c){function d(c,d,e){var f=b.createElement(c);return d&&(f.id=_+d),e&&(f.style.cssText=e),a(f)}function e(){return c.innerHeight?c.innerHeight:a(c).height()}function f(a){var b=y.length,c=(Q+a)%b;return 0>c?b+c:c}function g(a,b){return Math.round((/%/.test(a)?("x"===b?z.width():e())/100:1)*parseInt(a,10))}function h(a,b){return a.photo||a.photoRegex.test(b)}function i(a,b){return a.retinaUrl&&c.devicePixelRatio>1?b.replace(a.photoRegex,a.retinaSuffix):b}function j(a){"contains"in r[0]&&!r[0].contains(a.target)&&(a.stopPropagation(),r.focus())}function k(){var b,c=a.data(P,$);null==c?(K=a.extend({},Z),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=a.extend({},c);for(b in K)a.isFunction(K[b])&&"on"!==b.slice(0,2)&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||a(P).data("rel")||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,"string"==typeof K.href&&(K.href=a.trim(K.href))}function l(c,d){a(b).trigger(c),ha.triggerHandler(c),a.isFunction(d)&&d.call(P)}function m(c){U||(P=c,k(),y=a(P),Q=0,"nofollow"!==K.rel&&(y=a("."+aa).filter(function(){var b,c=a.data(this,$);return c&&(b=a(this).data("rel")||c.rel||this.rel),b===K.rel}),Q=y.index(P),-1===Q&&(y=y.add(P),Q=y.length-1)),q.css({opacity:parseFloat(K.opacity),cursor:K.overlayClose?"pointer":"auto",visibility:"visible"}).show(),X&&r.add(q).removeClass(X),K.className&&r.add(q).addClass(K.className),X=K.className,K.closeButton?I.html(K.close).appendTo(t):I.appendTo("<div/>"),S||(S=T=!0,r.css({visibility:"hidden",display:"block"}),A=d(ia,"LoadedContent","width:0; height:0; overflow:hidden"),t.css({width:"",height:""}).append(A),L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),K.w=g(K.initialWidth,"x"),K.h=g(K.initialHeight,"y"),A.css({width:"",height:K.h}),W.position(),l(ba,K.onOpen),J.add(D).hide(),r.focus(),K.trapFocus&&b.addEventListener&&(b.addEventListener("focus",j,!0),ha.one(fa,function(){b.removeEventListener("focus",j,!0)})),K.returnFocus&&ha.one(fa,function(){a(P).focus()})),p())}function n(){!r&&b.body&&(Y=!1,z=a(c),r=d(ia).attr({id:$,"class":a.support.opacity===!1?_+"IE":"",role:"dialog",tabindex:"-1"}).hide(),q=d(ia,"Overlay").hide(),C=a([d(ia,"LoadingOverlay")[0],d(ia,"LoadingGraphic")[0]]),s=d(ia,"Wrapper"),t=d(ia,"Content").append(D=d(ia,"Title"),E=d(ia,"Current"),H=a('<button type="button"/>').attr({id:_+"Previous"}),G=a('<button type="button"/>').attr({id:_+"Next"}),F=d("button","Slideshow"),C),I=a('<button type="button"/>').attr({id:_+"Close"}),s.append(d(ia).append(d(ia,"TopLeft"),u=d(ia,"TopCenter"),d(ia,"TopRight")),d(ia,!1,"clear:left").append(v=d(ia,"MiddleLeft"),t,w=d(ia,"MiddleRight")),d(ia,!1,"clear:left").append(d(ia,"BottomLeft"),x=d(ia,"BottomCenter"),d(ia,"BottomRight"))).find("div div").css({"float":"left"}),B=d(ia,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function o(){function c(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey||(a.preventDefault(),m(this))}return r?(Y||(Y=!0,G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+_,function(a){var b=a.keyCode;S&&K.escKey&&27===b&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&!a.altKey&&(37===b?(a.preventDefault(),H.click()):39===b&&(a.preventDefault(),G.click()))}),a.isFunction(a.fn.on)?a(b).on("click."+_,"."+aa,c):a("."+aa).live("click."+_,c)),!0):!1}function p(){var e,f,j,m=W.prep,n=++ja;T=!0,R=!1,P=y[Q],k(),l(ga),l(ca,K.onLoad),K.h=K.height?g(K.height,"y")-N-L:K.innerHeight&&g(K.innerHeight,"y"),K.w=K.width?g(K.width,"x")-O-M:K.innerWidth&&g(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=g(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=g(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),e=K.href,V=setTimeout(function(){C.show()},100),K.inline?(j=d(ia).hide().insertBefore(a(e)[0]),ha.one(ga,function(){j.replaceWith(A.children())}),m(a(e))):K.iframe?m(" "):K.html?m(K.html):h(K,e)?(e=i(K,e),R=b.createElement("img"),a(R).addClass(_+"Photo").bind("error",function(){K.title=!1,m(d(ia,"Error").html(K.imgError))}).one("load",function(){var b;n===ja&&(a.each(["alt","longdesc","aria-describedby"],function(b,c){var d=a(P).attr(c)||a(P).attr("data-"+c);d&&R.setAttribute(c,d)}),K.retinaImage&&c.devicePixelRatio>1&&(R.height=R.height/c.devicePixelRatio,R.width=R.width/c.devicePixelRatio),K.scalePhotos&&(f=function(){R.height-=R.height*b,R.width-=R.width*b},K.mw&&R.width>K.mw&&(b=(R.width-K.mw)/R.width,f()),K.mh&&R.height>K.mh&&(b=(R.height-K.mh)/R.height,f())),K.h&&(R.style.marginTop=Math.max(K.mh-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),R.style.width=R.width+"px",R.style.height=R.height+"px",setTimeout(function(){m(R)},1))}),setTimeout(function(){R.src=e},1)):e&&B.load(e,K.data,function(b,c){n===ja&&m("error"===c?d(ia,"Error").html(K.xhrError):a(this).contents())})}var q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},$="colorbox",_="cbox",aa=_+"Element",ba=_+"_open",ca=_+"_load",da=_+"_complete",ea=_+"_cleanup",fa=_+"_closed",ga=_+"_purge",ha=a("<a/>"),ia="div",ja=0,ka={},la=function(){function a(){clearTimeout(g)}function b(){(K.loop||y[Q+1])&&(a(),g=setTimeout(W.next,K.slideshowSpeed))}function c(){F.html(K.slideshowStop).unbind(i).one(i,d),ha.bind(da,b).bind(ca,a),r.removeClass(h+"off").addClass(h+"on")}function d(){a(),ha.unbind(da,b).unbind(ca,a),F.html(K.slideshowStart).unbind(i).one(i,function(){W.next(),c()}),r.removeClass(h+"on").addClass(h+"off")}function e(){f=!1,F.hide(),a(),ha.unbind(da,b).unbind(ca,a),r.removeClass(h+"off "+h+"on")}var f,g,h=_+"Slideshow_",i="click."+_;return function(){f?K.slideshow||(ha.unbind(ea,e),e()):K.slideshow&&y[1]&&(f=!0,ha.one(ea,e),K.slideshowAuto?c():d(),F.show())}}();a.colorbox||(a(n),W=a.fn[$]=a[$]=function(b,c){var d=this;if(b=b||{},n(),o()){if(a.isFunction(d))d=a("<a/>"),b.open=!0;else if(!d[0])return d;c&&(b.onComplete=c),d.each(function(){a.data(this,$,a.extend({},a.data(this,$)||Z,b))}).addClass(aa),(a.isFunction(b.open)&&b.open.call(d)||b.open)&&m(d[0])}return d},W.position=function(b,c){function d(){u[0].style.width=x[0].style.width=t[0].style.width=parseInt(r[0].style.width,10)-M+"px",t[0].style.height=v[0].style.height=w[0].style.height=parseInt(r[0].style.height,10)-L+"px"}var f,h,i,j=0,k=0,l=r.offset();if(z.unbind("resize."+_),r.css({top:-9e4,left:-9e4}),h=z.scrollTop(),i=z.scrollLeft(),K.fixed?(l.top-=h,l.left-=i,r.css({position:"fixed"})):(j=h,k=i,r.css({position:"absolute"})),k+=K.right!==!1?Math.max(z.width()-K.w-O-M-g(K.right,"x"),0):K.left!==!1?g(K.left,"x"):Math.round(Math.max(z.width()-K.w-O-M,0)/2),j+=K.bottom!==!1?Math.max(e()-K.h-N-L-g(K.bottom,"y"),0):K.top!==!1?g(K.top,"y"):Math.round(Math.max(e()-K.h-N-L,0)/2),r.css({top:l.top,left:l.left,visibility:"visible"}),s[0].style.width=s[0].style.height="9999px",f={width:K.w+O+M,height:K.h+N+L,top:j,left:k},b){var m=0;a.each(f,function(a){return f[a]!==ka[a]?void(m=b):void 0}),b=m}ka=f,b||r.css(f),r.dequeue().animate(f,{duration:b||0,complete:function(){d(),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+_,W.position)},1),c&&c()},step:d})},W.resize=function(a){var b;S&&(a=a||{},a.width&&(K.w=g(a.width,"x")-O-M),a.innerWidth&&(K.w=g(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=g(a.height,"y")-N-L),a.innerHeight&&(K.h=g(a.innerHeight,"y")),a.innerHeight||a.height||(b=A.scrollTop(),A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),b&&A.scrollTop(b),W.position("none"===K.transition?0:K.speed))},W.prep=function(c){function e(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function g(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(S){var j,k="none"===K.transition?0:K.speed;A.empty().remove(),A=d(ia,"LoadedContent").append(c),A.hide().appendTo(B.show()).css({width:e(),overflow:K.scrolling?"auto":"hidden"}).css({height:g()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),j=function(){function c(){a.support.opacity===!1&&r[0].style.removeAttribute("filter")}var e,g,j=y.length,m="frameBorder",n="allowTransparency";S&&(g=function(){clearTimeout(V),C.hide(),l(da,K.onComplete)},D.html(K.title).add(A).show(),j>1?("string"==typeof K.current&&E.html(K.current.replace("{current}",Q+1).replace("{total}",j)).show(),G[K.loop||j-1>Q?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),la(),K.preloading&&a.each([f(-1),f(1)],function(){var c,d,e=y[this],f=a.data(e,$);f&&f.href?(c=f.href,a.isFunction(c)&&(c=c.call(e))):c=a(e).attr("href"),c&&h(f,c)&&(c=i(f,c),d=b.createElement("img"),d.src=c)})):J.hide(),K.iframe?(e=d("iframe")[0],m in e&&(e[m]=0),n in e&&(e[n]="true"),K.scrolling||(e.scrolling="no"),a(e).attr({src:K.href,name:(new Date).getTime(),"class":_+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",g).appendTo(A),ha.one(ga,function(){e.src="//about:blank"}),K.fastIframe&&a(e).trigger("load")):g(),"fade"===K.transition?r.fadeTo(k,1,c):c())},"fade"===K.transition?r.fadeTo(k,0,function(){W.position(0,j)}):W.position(k,j)}},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=f(1),m(y[Q]))},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=f(-1),m(y[Q]))},W.close=function(){S&&!U&&(U=!0,S=!1,l(ea,K.onCleanup),z.unbind("."+_),q.fadeTo(K.fadeOut||0,0),r.stop().fadeTo(K.fadeOut||0,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),l(ga),A.empty().remove(),setTimeout(function(){U=!1,l(fa,K.onClosed)},1)}))},W.remove=function(){r&&(r.stop(),a.colorbox.close(),r.stop().remove(),q.remove(),U=!1,r=null,a("."+aa).removeData($).removeClass(aa),a(b).unbind("click."+_))},W.element=function(){return a(P)},W.settings=Z)}(jQuery,document,window);