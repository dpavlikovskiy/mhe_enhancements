function show_product_tooltip(a,b,c,d){$("#product_tooltip").html("<div id='title'>"+unescape(a)+"</div><div id='category'>"+b+"</div><hr><table><tr class='price'><td>Price: </td><td>"+c+"</td></tr><tr class='inventory'><td>Inventory record: </td><td>"+d+"</td></tr></table>")}var Product={searchUrl:"",search:function(a,b){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_PRODUCT_SEARCH)){CSSuite.info="Product.search";var c=Product.searchUrl;null!=b&&b.length>5&&(c=b),jQuery.ajax({url:c,cache:!1,data:{q:document.getElementById("ProductSearchForm_ProductQuery").value,results:document.getElementById("ProductSearchForm_ResultSet").value},success:function(a,b){$("#product_searchresults_container").html(a)},error:handleError,beforeSend:function(a){CSSuite.wait($("#product_searchresults_container"))},complete:function(a,b){CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_PRODUCT_SEARCH)}})}}};!function(a){a?a.Product=function(b){var c=b.data,d="",e=!1,f=function(b){e=!0,a.ajax.getJson({url:Product.getVariantsURL,data:{pid:b.pid,format:"json"},callback:function(a){a&&a.variations&&a.variations.variants&&(c.variations.variants=a.variations.variants,e=!1,jQuery(b).trigger("VariationsLoaded",["loadVariants"]))}})},g=function(a){jQuery(a.containerId+" .quantityinput:last").keyup(function(b){var c=null;try{c=parseInt(jQuery(a.containerId+" .quantityinput:last").val())}catch(b){c=null}null!=c&&(a.selectedOptions.Quantity=c,k(j(a,c)),jQuery(a).trigger("AddtoCartEnabled"))}),a.selectedOptions.Quantity=jQuery(a.containerId+" .quantityinput:last").val(),k(j(a,a.selectedOptions.Quantity))},h=function(a){},i=function(a){jQuery(a+" #pdpReadReview").click(function(b){jQuery(a+" #pdpTabsDiv").tabs("select","pdpReviewsTab")}),jQuery(a+" #pdpWriteReview").click(function(a){})},j=function(b,c){var d=b.getAvStatus(),e=a.resources[d],f=b.getATS();return d===a.constants.AVAIL_STATUS_BACKORDER?e=e+"<br/>"+jQuery.format(a.resources.IN_STOCK_DATE,new Date(b.getInStockDate()).toDateString()):c>f&&d!==a.constants.AVAIL_STATUS_NOT_AVAILABLE&&(e=jQuery.format(a.resources["QTY_"+d],f)),e},k=function(a){jQuery(d+" .availability:last .value").html(a)},l=function(a){var b=null!=a.selectedVar?a.selectedVar.pricing.sale:c.pricing.sale;return jQuery.each(a.selectedPrice,function(){b=(new Number(b)+new Number(this)).toFixed(2)}),b};return{pid:c.ID,variant:c.variant,master:c.master,bundled:c.bundled,selectedVarAttribs:{},selectedVar:null,selectedOptions:{},selectedPrice:{},containerId:null,subProducts:[],enableA2CButton:function(){this.selectedVar&&this.selectedVar.id&&($("#productid")[0].value=this.selectedVar.id)},disableA2CButton:function(){$("#productid")[0].value=""},isSubProduct:function(){return(c.bundled||c.productSetProduct)&&a.ProductCache.subProducts.length>0},showSelectedVarAttrVal:function(a,b){jQuery(this.containerId+" .variationattributes div:not(.clear)").each(function(){var c=jQuery(this).data("data");a===c&&jQuery(this).find("span.selectedvarval").html(b)})},showImages:function(a,b){var c=this;b=b||{},jQuery.each(b,function(){var b=-1,d=this;if(this.val===a&&this.images){this.images.small.length>0&&(jQuery(c.containerId+" .productthumbnails:last").html(""),jQuery(c.containerId+" .productimage").html("").append(jQuery("<img/>").attr("src",d.images.large[0])));var e=this.images.large.length>=this.images.small.length?this.images.small.length:this.images.large.length;(this.images.small.length>1||c.isSubProduct())&&jQuery.each(this.images.small,function(){b++;var a=b;b>e-1||jQuery(c.containerId+" .productthumbnails:last").append(jQuery("<img/>").attr("src",this).hover(function(b){jQuery(c.containerId+" .productimage").html("").append(jQuery("<img/>").attr("src",d.images.large[a]))}))})}})},varAttrSelected:function(a){this.showSelectedVarAttrVal(a.data.id,a.data.val||""),this.selectedVarAttribs[a.data.id]=a.data.val,null==a.data.val&&(this.variant=!1);var b=this;if(!e){var d=null!=a.data.val?this.findVariations({id:a.data.id,val:a.data.val}):null,f=jQuery.extend({},{},this.selectedVarAttribs),g=null,h=new Array;for(var i in f)f[i]?g=this.findVariations({id:i,val:f[i]},g):h.push(i);jQuery.each(c.variations.attributes,function(){this.id==a.data.id&&null!=a.data.val||null!=f[this.id]?this.id!=a.data.id&&null!=f[this.id]?b.varAttrDisplayHandler(this.id,d):b.showImages(a.data.val,this.vals):b.varAttrDisplayHandler(this.id,g)}),this.selectedVar=this.findVariation(this.selectedVarAttribs)}jQuery(this).trigger("VariationsLoaded")},resetVariations:function(){if(!e){var a=this;jQuery(this.containerId+" .variationattributes .swatches").each(function(){var b=jQuery(this).data("data");jQuery(this).find("a.swatchanchor").each(function(){a.isVariation({id:b,val:this.innerHTML})?jQuery(this).parent().removeClass("unselectable"):(jQuery(this).parent().addClass("unselectable"),jQuery(this).parent().removeClass("selected"))})})}},varAttrDisplayHandler:function(a,b){var c=this;jQuery(this.containerId+" .variationattributes .swatches").each(function(){var d=jQuery(this).data("data");d===a&&jQuery(this).find("a.swatchanchor").each(function(){var d=jQuery(this).parent(),e=c.findVariations({id:a,val:this.innerHTML},b);e.length>0?d.removeClass("unselectable"):(d.addClass("unselectable"),d.hasClass("selected")&&(c.showSelectedVarAttrVal(a,""),c.selectedVarAttribs[a]=null),d.removeClass("selected"))})}),jQuery(this.containerId+" .variationattributes .variantdropdown select").each(function(){var d=jQuery(this).data("data").id;if(d===a){var e=this.options.length;jQuery.each(this.options,function(){if(!(e>1&&0==this.index)){var d=c.findVariations({id:a,val:this.value},b);d.length>0?this.disabled=!1:(this.disabled=!0,this.selected&&(c.showSelectedVarAttrVal(a,""),c.selectedVarAttribs[a]=null),this.selected=!1)}})}})},refreshView:function(){var b=this;e||null!=this.selectedVar||(this.selectedVar=this.findVariation(this.selectedVarAttribs)),e||null==this.selectedVar?this.disableA2CButton():(k(j(b,1)),(this.selectedVar.inStock||this.selectedVar.avStatus!==a.constants.AVAIL_STATUS_NOT_AVAILABLE)&&(this.getPrice()>0||this.isPromoPrice())?this.enableA2CButton():this.disableA2CButton());var d=[],f=null;for(var g in this.selectedVarAttribs)this.selectedVarAttribs[g]&&(f=this.findVariations({id:g,val:this.selectedVarAttribs[g]},f));jQuery.each(c.variations.attributes,function(){b.showSelectedVarAttrVal(this.id,b.selectedVarAttribs[this.id]),b.selectedVarAttribs[this.id]&&""!=b.selectedVarAttribs[this.id]||(d.push(this.name),b.varAttrDisplayHandler(this.id,f))});var h="",i=d.length;if(1==i||2==i)h=d.join(" & ");else for(var l=0;i>l;l++){if(l==i-2){h+=d[l]+" & "+d[l+1];break}h+=d[l]+", "}if(d.length>0){var m=jQuery.format(a.resources.MISSING_VAL,h);k(m),jQuery(b.containerId+" .addtocartbutton:last").attr("title",m)}},showUpdatedPrice:function(b,c){var d=Number(c||0),e=Number(b||0),f="",g={salePrice:e,standardPrice:d};a.ajax.getJson({url:a.URLs.formatMoney,cache:!0,async:!1,data:{salePrice:e,standardPrice:d},callback:function(a){g=a}}),f=e>0||this.isPromoPrice()?'<div class="salesprice">'+g.salePrice+"</div>":' <div class="salesprice">N/A</div>',d>0&&d>e&&(f='<div class="standardprice">'+g.standardPrice+" </div>"+f),jQuery(this.containerId+" .productinfo .price:first").html(f),jQuery(this.containerId+" #pdpATCDiv"+this.containerId.substring(1)+" .price").html(f)},getPrice:function(){return l(this)},isPromoPrice:function(){return null!=this.selectedVar?this.selectedVar.pricing.isPromoPrice:c.pricing.isPromoPrice},isVariation:function(a,b){for(var d=null,e=0;e<c.variations.variants.length;e++)if(d=c.variations.variants[e],d.attributes[a.id]==a.val&&(void 0==b||d.attributes[b.id]==b.val))return!0;return!1},findVariations:function(a,b){var d=new Array;b=b||c.variations.variants;for(var e=null,f=0;f<b.length;f++)e=b[f],e.attributes[a.id]===a.val&&d.push(e);return d},findVariation:function(a){if(!this.checkAttrs(a))return null;for(var b=function(a){var b="";return jQuery.each(c.variations.attributes,function(){b+=a[this.id]}),b},d=b(a),e=0;e<c.variations.variants.length;e++)if(variant=c.variations.variants[e],b(variant.attributes)===d)return variant;return null},findVariationById:function(a){for(var b=0;b<c.variations.variants.length;b++){var d=c.variations.variants[b];if(d&&d.id===a)return d}return{}},checkAttrs:function(a){for(var b=0;b<c.variations.attributes.length;b++)if(null==a[c.variations.attributes[b].id])return!1;return!0},getAttrByID:function(a){for(var b=0;b<c.variations.attributes.length;b++)if(c.variations.attributes[b].id===a)return c.variations.attributes[b];return{}},getAvStatus:function(){return(this.variant||this.master)&&null!=this.selectedVar?this.selectedVar.avStatus:c.avStatus},getATS:function(){return(this.variant||this.master)&&null!=this.selectedVar?this.selectedVar.ATS:c.ATS},getInStockDate:function(){return(this.variant||this.master)&&null!=this.selectedVar?this.selectedVar.inStockDate:c.inStockDate},isA2CEnabled:function(){return this.variant||this.master?null!=this.selectedVar?this.selectedVar.avStatus===a.constants.AVAIL_STATUS_IN_STOCK:!1:c.avStatus===a.constants.AVAIL_STATUS_IN_STOCK},show:function(b){var e=this;jQuery(this).bind("VariationsLoaded",{},function(a,b){e.variant&&null==e.selectedVar&&(e.selectedVar=e.findVariation(e.selectedVarAttribs)),b&&"loadVariants"==b&&e.resetVariations(),e.refreshView()}),this.containerId=".productInformation";var l=!1;if(d=this.containerId,c.master||c.variant?(f(this),jQuery(e.containerId+" .variationattributes .swatches").each(function(){var a=jQuery(this),b=a.data("data"),d=e.getAttrByID(b);if(d){e.selectedVarAttribs[b]=a.find(".selected a").html();var f=function(c){var d=jQuery(this);return c.data={id:b,val:this.innerHTML},d.parent().hasClass("unselectable")?!1:(d.parent().hasClass("selected")?(c.data={id:b,val:null},d.parent().removeClass("selected"),e.resetVariations(),e.varAttrSelected(c)):(c.data={id:b,val:this.innerHTML},a.find(".selected").removeClass("selected"),d.parent().addClass("selected"),e.varAttrSelected(c)),!1)},g=a.find("a.swatchanchor");if("color"===b){var h=e.getAttrByID("color");g.each(function(){var a=function(a){for(var b=0;b<h.vals.length;b++)if(h.vals[b].val===a)return h.vals[b].images.swatch;return""},b=a(this.innerHTML);b&&""!=b?jQuery(this).css("color","transparent").parent().css("background","url("+b+")"):jQuery(this).css("color","transparent")}),g.data("data",{id:b}).click(f).hover(function(a){e.showSelectedVarAttrVal("color",this.innerHTML),e.showImages(this.innerHTML,h.vals)}).mouseleave(function(a){e.selectedVarAttribs.color?e.showImages(e.selectedVarAttribs.color,h.vals):e.showImages("",[{val:"",images:c.images}]),e.showSelectedVarAttrVal("color",e.selectedVarAttribs.color||"")})}else g.data("data",{id:b}).click(f)}}),jQuery(e.containerId+" .variationattributes .variantdropdown select").each(function(){var a=jQuery(this),b=a.data("data");a[0].selectedIndex>=0&&""!=a[0].options[a[0].selectedIndex].value&&(e.selectedVarAttribs[b]=a[0].options[a[0].selectedIndex].value),a.data("data",{id:b,val:""}).change(function(a){0==this.selectedIndex&&1==this.options.length||(a.data=jQuery(this).data("data"),a.data.val=0==this.selectedIndex?null:this.options[this.selectedIndex].value,0==this.selectedIndex&&e.resetVariations(),e.varAttrSelected(a))})}),e.selectedVarAttribs.color?e.showImages(e.selectedVarAttribs.color,e.getAttrByID("color").vals):e.showImages("",[{val:"",images:c.images}])):e.showImages("",[{val:"",images:c.images}]),c.productSet||(c.bundle?c.bundle&&k(j(this,1)):g(this)),(!(this.getPrice()>0||this.isPromoPrice())||c.master||c.variant||c.productSet||c.bundle||!c.inStock&&c.avStatus===a.constants.AVAIL_STATUS_NOT_AVAILABLE&&!c.productSet)&&this.disableA2CButton(),c.bundle){for(var m=!1,n=0;n<e.subProducts.length;n++){var o=e.subProducts[n];if(m=o.isA2CEnabled(),!m)break}m?this.enableA2CButton():this.disableA2CButton()}c.productSetProduct||c.bundled||c.productSet||l||c.bundle||i(this.containerId),h(this),jQuery.each(e.subProducts,function(){jQuery(this).bind("AddtoCartEnabled",{},function(){for(var a=!0,b=e.subProducts,d=new Number,f=0;f<b.length;f++){if((b[f].variant||b[f].master)&&null==b[f].selectedVar||!b[f].bundled&&(void 0==b[f].selectedOptions.Quantity||b[f].selectedOptions.Quantity<=0)){a=!1;break}null!=b[f].selectedVar?b[f].selectedOptions.pid=b[f].selectedVar.pid:b[f].selectedOptions.pid=b[f].pid,d+=new Number(b[f].getPrice())}a&&(c.productSet||c.inStock)&&(d>0||e.isPromoPrice())?e.enableA2CButton():e.disableA2CButton()})})},toString:function(){return this.model}}}:alert("app is undefined!")}(CSSuite);