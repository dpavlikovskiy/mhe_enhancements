!function(a){function b(b,c){this.ele=b;var d="";d=c.trim().length>0?c:"_6x_EGrDook",this.opts=a.extend({},{width:853,height:480,youtubevideoId:d},c),this.init()}b.prototype={init:function(){if(!a.colorbox)return this;this.ele.append('<span class="play-icon" />');this.ele.colorbox({html:'<iframe width="'+this.opts.width+'" height="'+this.opts.height+'" src="//www.youtube.com/embed/'+this.opts.youtubevideoId+'" frameborder="0" allowfullscreen></iframe>',scrolling:!1})},open:function(){a.colorbox({html:'<iframe width="'+this.opts.width+'" height="'+this.opts.height+'" src="//www.youtube.com/embed/'+this.opts.youtubevideoId+'" frameborder="0" allowfullscreen></iframe>',scrolling:!1})}},a.fn.youTubeOverlay=function(){return this.each(function(){var c=a(this).data().youtubeoverlay||{};new b(a(this),c)})}}(jQuery);