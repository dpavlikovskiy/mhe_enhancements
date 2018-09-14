function validateUKPostcode(a,b){var c=app.constants.CURRENT_LOCALE_COUNTRY,d=app.validator.regex.postal[c].test($.trim(a));return d}var isValidDate=function(a,b){var c=b||"mm/dd/yyyy",d=/[^mdy]/.exec(c)[0],e=c.split(d),f=a.split(d),g=function(a,b){for(var c,d,e,f,g,h=0,i=b.length;i>h;h++)/m/.test(b[h])&&(c=a[h]),/d/.test(b[h])&&(d=a[h]),/y/.test(b[h])&&(e=a[h]);return f=new Date,g=new Date(e,c-1,d),!!(c>0&&13>c&&e&&4===e.length&&d>0&&d<=new Date(e,c,0).getDate()&&f>=g)};return g(f,e)},meetsMinimumAge=function(a,b){var c=new Date(a.getFullYear()+b,a.getMonth()-1,a.getDate());return c<=new Date};$.validator.addClassRules({"name-input":{required:!0,minlength:2},"email-input":{required:!0,email:!0},"password-input":{required:!0,minlength:8,maxlength:20},"password-repeat":{equalTo:".new-pass"},"date-input":{required:!0,maskeddate:!0},"card-input":{minlengthNum:15,maxlengthNum:19},"input-datepicker":{required:!0,dateselected:!0},"phone-input":{minlengthNum:app.resources.PHONE_MIN,maxlengthNum:app.resources.PHONE_MAX},"postcode-input":{required:!0,ukpostcode:!0},"cvv-input":{required:!0,minlengthNum:3,maxlengthNum:4},"cvv2-input":{required:!0,minlengthNum:4,maxlengthNum:4},"input-textarea-gift":{required:!0,minlength:2,giftMSG:!0,profanityCheck:!0}}),$.validator.addMethod("ukpostcode",validateUKPostcode,app.resources.INVALID_POSTCODE),$.validator.addMethod("maskeddate",function(a,b){var c,d=!1,e="/",f=a.split(e)[0],g=a.split(e)[1],h=a.split(e)[2];return"undefined"!=typeof f&&1===f.length&&(f="0"+f),"undefined"!=typeof g&&1===g.length&&(g="0"+g),c=f+"/"+g+"/"+h,isValidDate(c,"dd/mm/yyyy")&&(d=!0),parseInt(h)<1900&&(d=!1),d},$.format(app.resources.VALID_DATE)),window.myNameisAge=app.resources.VALID_AGE,$("body").on("change","#dwfrm_agegate_country",function(){window.myNameisAge=$("#dwfrm_agegate_country option:selected").attr("data-validage")}),$.validator.addMethod("of-legal-age",function(a,b){var c,d,e=!1,f=/[\s,\/\-\.]+/,g=a.split(f)[0],h=a.split(f)[1],i=a.split(f)[2];app.resources.VALID_AGE;return 1===g.length&&(g="0"+g),1===h.length&&(h="0"+h),c=g+"/"+h+"/"+i,isValidDate(c,"dd/mm/yyyy")?(d=new Date(i,h,g),meetsMinimumAge(d,parseInt(window.myNameisAge))&&(e=!0),e):void 0},$.format(app.resources.AGE_GATE_ERROR)),$.validator.addMethod("dateselected",function(a,b){return $(b).closest(".form-row").hasClass("active")?!!$(b).val().substr(0,1).match(/^\d+$/):!0},$.format($("#js-dateselect-error").text())),$.validator.addMethod("required",function(a,b){return""!==a&&a!==b.getAttribute("placeholder")}),$.validator.setDefaults({submitHandler:function(a){$("#postcodeerror p").length?$(".postcode-input").focus():a.submit()},highlight:function(a,b){var c=$(a).closest(".form-row");c.removeClass("form-row-valid").addClass("form-row-error")},unhighlight:function(a,b){$(a).closest(".form-row").removeClass("form-row-error")},success:function(a,b){$(a).closest(".form-row").addClass("form-row-valid")},invalidHandler:function(a,b){function c(a){switch(a){case"MM":a=$("#js-msg-expiry-month").text();break;case"YY":a=$("#js-msg-expiry-year").text()}return a}var d,e=b.numberOfInvalids(),f="<span class='error'>"+app.resources.ERROR_MESSAGE+"</span><br>"+app.resources.CHECK_FOLLOWING_FIELD+"&nbsp;&nbsp;",g="<span class='error'>"+app.resources.ERROR_MESSAGE+"</span><br>"+app.resources.CHECK_FOLLOWING_FIELDS+"&nbsp;&nbsp;";if(e){var h=1===e?f:g,i=0;for(var j in b.errorList)if(i++,"object"==typeof b.errorList[j]){var k=$(b.errorList[j].element);h+="<span class='error-field"+(i===e?" last":"")+"'>",d=!k.is("select")||k.hasClass("chill_fuel")||k.hasClass("chill_fuel_time")?k.is("select")&&k.hasClass("chill_fuel")&&!k.hasClass("chill_fuel_time")?k.parents(".form-row").find(".chill_day label").text():k.is("select")&&k.hasClass("chill_fuel_time")?k.parents(".form-row").find(".chill_time label").text():k.parents(".form-row").find("label span.fName").text():k.find("option:eq(0)").text(),h+=c(d)+"</span>"}var l=$("div.errors-total"),m=$(a.target).closest(".dialog-content"),n=$("div.errors-total").find(".errors-total-inner");m.length&&(l=m.find($("div.errors-total"))),n.html(h),l.addClass("errors-total-visible"),l.css("max-height",n.outerHeight());var o=$(".errors-total-visible"),p=o.length?o.offset().top:0;o.length&&window.scrollTo(0,p)}else $("div.errors-total").removeClass("errors-total-visible")},focusCleanup:!0,focusInvalid:!1,ignore:":hidden",errorPlacement:function(a,b){$(b).parent().append(a).find(".error").hide().slideDown("fast")},messages:{MM:"Expiry Month",YY:"Expiry Year"}});