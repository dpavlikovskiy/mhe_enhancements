$(document).ready(function(){window.loginRegisterCtrl={$loginForm:$("#dwfrm_login"),$registerForm:$("#RegistrationForm"),$leadForm:$("#leadForm"),init:function(){1===this.$loginForm.length&&this.initLoginForm(this.$loginForm),1===this.$registerForm.length&&this.initRegisterForm(this.$registerForm),1===this.$leadForm.length&&this.initLeadForm(this.$leadForm)},initLoginForm:function(a){$("a[href='#']").click(function(a){a.preventDefault()}),a.find("[type='submit']").on("click",function(){$.browser.msie?(a.find("input").not("[name]").removeClass("password-input required"),a.find("input").focus().focusout().validate()):a.validate()}),$.fn.isOnScreen=function(){var a=$(window),b={top:a.scrollTop(),left:a.scrollLeft()};b.right=b.left+a.width(),b.bottom=b.top+a.height();var c=this.offset();return c.right=c.left+this.outerWidth(),c.bottom=c.top+this.outerHeight(),!(b.right<c.left||b.left>c.right||b.bottom<c.top||b.top>c.bottom)},$(".loginAreaCont").each(function(){$(window).scroll(function(){var a=$(".lRBox"),b=$(".cloned").isOnScreen(),c=a.find(".hiddenItems"),d=a.find(".shownItems"),e=a.height();b?(a.addClass("lRBoxBottom"),c.show(),d.hide(),$(".cloned").css("min-height",e+200)):(a.removeClass("lRBoxBottom"),c.hide(),d.show())});var a=$(".loginAreaCont").find(".bgImage").attr("class"),b=$(".loginAreaCont").find(".bgImage img").attr("src");$(".loginArea").css("background-image","url('"+b+"')"),$(".loginAreaCont").find(".bgImage").remove(),$(".loginArea").addClass(a);var c=$(".loginArea").find(".lRBox").height();$(".loginArea").css("min-height",c),$("p.discoverMoet").click(function(){var a=$(this).offset().top;$("html, body").animate({scrollTop:a})}),$(".loginAreaCont").append("<div class='cloned "+a+"' style='min-height:"+c+"px; background-image:url("+b+")'></div>")})},initRegisterForm:function(a){$("a[href='#']").click(function(a){a.preventDefault()}),a.find("select").uniform(),$.fn.isOnScreen=function(){var a=$(window),b={top:a.scrollTop(),left:a.scrollLeft()};b.right=b.left+a.width(),b.bottom=b.top+a.height();var c=this.offset();return c.right=c.left+this.outerWidth(),c.bottom=c.top+this.outerHeight(),!(b.right<c.left||b.left>c.right||b.bottom<c.top||b.top>c.bottom)},$(".loginAreaCont").each(function(){$(window).scroll(function(){var a=$(".lRBox"),b=$(".cloned").isOnScreen(),c=a.find(".hiddenItems"),d=a.find(".shownItems"),e=a.height();b?(a.addClass("lRBoxBottom"),c.show(),d.hide(),$(".cloned").css("min-height",e+200)):(a.removeClass("lRBoxBottom"),c.hide(),d.show())});var a=$(".loginAreaCont").find(".bgImage img").attr("src");$(".loginArea").css("background-image","url('"+a+"')"),$(".loginAreaCont").find(".bgImage").remove();var b=$(".loginArea").find(".lRBox").height();$(".loginArea").css("min-height",b),$("p.discoverMoet").click(function(){var a=$(this).offset().top;$("html, body").animate({scrollTop:a})}),$(".loginAreaCont").append("<div class='cloned' style='min-height:"+b+"px; background-image:url("+a+")'></div>")})},initLeadForm:function(a){a.find("select").uniform()}},loginRegisterCtrl.init()});