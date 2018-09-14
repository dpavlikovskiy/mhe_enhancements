var Order={STATUS_NEW:1,STATUS_MODIFIED:2,saveUrl:"",addProductUrl:"",updateLineItemQtyUrl:"",SEARCH_CONTEXT_ALL:"ALL",SEARCH_CONTEXT_CUSTOMER:"CUSTOMER",orderNo:null,orderStatus:null,lastCustomerNumber:"",lastOrderSearchContext:this.SEARCH_CONTEXT_ALL,addNote:function(){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.addNotes";var a=$("#note_subject").val(),b=$("#note_text").val(),c="notesubject="+a+"&notetext="+b;jQuery.ajax({type:"POST",url:Order.addNoteUrl,cache:!1,data:c,success:function(a,b){$("#notes_details").html(a)},error:handleError,complete:function(a,b){CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()}})}},addProduct:function(a){CSSuite.info="Order.addProduct",CSSuite.context==CSSuite.CONTEXT_ORDER?Dialog.addProductToShipments(a):Dialog.showProduct(a)},addProductToShipments:function(a){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.addProductToShipments";var b="#"+a,c=$(b).serialize(),d=$("select.productOption");d.length>0&&$.each(d,function(a,b){c+="&"+b.id+"="+escape(b.value)}),jQuery.ajax({type:"POST",url:Order.addProductToShipmentsUrl,cache:!1,data:c,success:function(a,b){$("#GeneralJQueryDialog").html(a),Order.refreshAllDetails()},error:handleError,complete:function(a,b){CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()}})}},cancelOrder:function(a){CSSuite.info="Order.cancelOrder";var b=$("#OrderCancelationForm").serialize();b+=a?"&"+a+"=true":"";var c=$("#OrderCancelationForm").attr("action");jQuery.ajax({url:c,cache:!1,data:b,type:"POST",success:function(a,b){$("#GeneralJQueryDialog").html(a),Order.showAllOrders()},error:handleError,complete:function(a,b){$.unblockUI(),Order.showStatus()},beforeSend:function(a){CSSuite.wait2($("#lineitems_details"))}})},saveShipment:function(a){CSSuite.info="Order.saveShipment";var b=$("#EditShippingForm").serialize();b+=a?"&"+a+"=true":"";var c=$("#EditShippingForm").attr("action");jQuery.ajax({type:"POST",url:c,cache:!1,data:b,success:function(a,b){$("#GeneralJQueryDialog").html(a),CSSuite.debug(b),$("div.js-calendar").find(".datepicker").datePicker();var c=$("#shippingMethodsCS"),d=c.find(".formRowCS"),e=($("div.js-calendar"),d.find("input"));d.find("input.datepicker-display");$("#shippingMethodsCS").each(function(){var a=$(this),b=a.find(".formRowCS");b.each(function(){var a=$(this),b=a.find("div.js-calendar").length;b&&a.addClass("calen")})}),e.each(function(){"checked"===$(this).attr("checked")&&$(this).parents(".formRowCS").addClass("active"),$(this).on("click",function(){var a=$(this).parents(".formRowCS"),b=a.find("div.js-calendar").length;d.removeClass("active"),a.addClass("active"),b||$("#getDate").val("")})})},error:handleError,complete:function(a,b){Order.showStatus()}})},searchOrders:function(){CSSuite.lockAction(CSSuite.LOCK_SCOPE_ORDER_SEARCH)&&(this.lastOrderSearchContext=this.SEARCH_CONTEXT_ALL,CSSuite.info="Order.searchOrders",Order.reset(),jQuery.ajax({url:Order.searchOrdersUrl,cache:!1,data:{orderNo:document.getElementById("OrderSearchForm_OrderNo").value,customerNo:document.getElementById("OrderSearchForm_CustomerNo").value,firstName:document.getElementById("OrderSearchForm_FirstName").value,lastName:document.getElementById("OrderSearchForm_LastName").value,email:document.getElementById("OrderSearchForm_CustomerEmail").value,status:document.getElementById("OrderSearchForm_OrderStatus").value,confirmation:document.getElementById("OrderSearchForm_ConfirmationStatus").value,shipment:document.getElementById("OrderSearchForm_ShippingStatus").value,payment:document.getElementById("OrderSearchForm_PaymentStatus").value,exported:document.getElementById("OrderSearchForm_ExportStatus").value,from:document.getElementById("OrderSearchForm_OrderStartDate").value,to:document.getElementById("OrderSearchForm_OrderEndDate").value,results:document.getElementById("OrderSearchForm_ResultSet").value},beforeSend:function(a){$("#order_list").show(),$("#product_detail").hide(),CSSuite.wait2($("#order_list"))},success:function(a,b){$("#order_list").html(a),CSSuite.debug(CSSuite.info+": "+b)},error:handleError,complete:function(a,b){CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_ORDER_SEARCH),$("#tabs").hide()}}))},getCustomerOrders:function(a){CSSuite.lockAction(CSSuite.LOCK_SCOPE_ORDER_SEARCH)&&(CSSuite.info="Order.getCustomerOrders",Order.reset(),a&&(lastCustomerNumber=a),this.lastOrderSearchContext=this.SEARCH_CONTEXT_CUSTOMER,jQuery.ajax({url:Order.searchOrdersUrl,cache:!1,data:{customerNo:lastCustomerNumber,results:document.getElementById("OrderSearchForm_ResultSet").value},beforeSend:function(a){$("#order_list").show(),$("#product_detail").hide(),CSSuite.wait2($("#order_list"))},success:function(a,b){$("#order_list").html(a),CSSuite.debug(CSSuite.info+": "+b)},error:handleError,complete:function(a,b){CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_ORDER_SEARCH),$("#tabs").hide()}}))},getGeneralInfo:function(){CSSuite.info="Order.getGeneralInfo";var a="orderno="+Order.orderNo;$("#order_number").html(Order.orderNo),jQuery.ajax({url:Order.generalInfoUrl,cache:!1,data:a,success:function(a,b){$("#order_infopanel_customer").html(a)},error:handleError})},getNotes:function(){CSSuite.info="Order.getNotes";var a="method="+CSSuite.info;jQuery.ajax({url:Order.getNotesUrl,cache:!1,data:a,success:function(a,b){$("#notes_details").html(a),CSSuite.debug(CSSuite.info+b)},error:handleError,complete:function(a,b){}})},getHistory:function(){CSSuite.info="Order.getHistory";var a="method="+CSSuite.info;jQuery.ajax({url:Order.getHistoryUrl,cache:!1,data:a,success:function(a,b){$("#history_details").html(a),CSSuite.debug(CSSuite.info+b)},error:handleError,complete:function(a,b){}})},getProductLineItems:function(){CSSuite.info="Order.getProductLineItems";"method="+CSSuite.info;jQuery.ajax({url:Order.productLineItemsUrl,cache:!1,data:"method=productLineItems",success:function(a,b){CSSuite.msg("Order refreshed"),$("#lineitems_details").html(a)},error:handleError,complete:function(a,b){$.unblockUI()},beforeSend:function(a){CSSuite.wait2($("#lineitems_details")),Order.showStatus()}}),Order.getPaymentInfo()},addPriceAdjustment:function(){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.addPriceAdjustment";var a=$("#price_adjustment_value").val(),b=$("#price_adjustment_callout_message").val(),c="priceAdjustment="+a+"&calloutMessage="+b;jQuery.ajax({url:Order.addPriceAdjustmentUrl,cache:!1,data:c,type:"POST",success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){$.unblockUI(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER)},beforeSend:function(a){}})}},removePriceAdjustment_dlg:function(a){Dialog.confirm("Please Confirm","Are you sure you want to remove this price adjustment?<br/>",function(){Order.removePriceAdjustment(a)})},removePriceAdjustment:function(a){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.removePriceAdjustment";var b="priceAdjustmentID="+a;jQuery.ajax({url:Order.removePriceAdjustmentUrl,cache:!1,data:b,type:"POST",success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){$.unblockUI(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()},beforeSend:function(a){}})}},removeShippingPriceAdjustment_dlg:function(a){Dialog.confirm("Please Confirm","Are you sure you want to remove this shipping price adjustment?<br/>",function(){Order.removeShippingPriceAdjustment(a)})},removeShippingPriceAdjustment:function(a){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.removeShippingPriceAdjustment";var b="shippingPriceAdjID="+a;jQuery.ajax({url:Order.removeShippingPriceAdjustmentUrl,cache:!1,data:b,type:"POST",success:function(a,b){$("#GeneralJQueryDialog").html(a),Order.getProductLineItems()},error:handleError,complete:function(a,b){$.unblockUI(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()},beforeSend:function(a){CSSuite.wait2($("#lineitems_details"))}})}},setShippingPrice:function(){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.setShippingPrice";var a=$("#shippingpricetotal").val(),b="shippingPrice="+a;jQuery.ajax({url:Order.shippingPriceUrl,cache:!1,data:b,type:"POST",success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){$.unblockUI(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER)},beforeSend:function(a){}})}},removeCoupon_dlg:function(a){Dialog.confirm("Please Confirm","Are you sure you want to remove this coupon?<br/>",function(){Order.removeCoupon(a)})},removeCoupon:function(a){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.removeCoupon";var b="couponCode="+a;jQuery.ajax({url:Order.removeCouponUrl,cache:!1,data:b,type:"POST",success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){$.unblockUI(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()},beforeSend:function(a){}})}},addCoupon:function(){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.addCoupon";var a="couponCode="+$("#price_adjustment_coupon").val();jQuery.ajax({url:Order.addCouponUrl,cache:!1,data:a,type:"POST",success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){$.unblockUI(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()},beforeSend:function(a){}})}},getPaymentInfo:function(){CSSuite.info="Order.getPaymentInfo";var a="method=getPaymentInfo";jQuery.ajax({url:Order.paymentInfoUrl,cache:!1,data:a,success:function(a,b){$("#order_infopanel_payments").html(a)},error:handleError,complete:function(a,b){},beforeSend:function(a){CSSuite.wait2($("#order_infopanel_payments"))}})},getBillingAddress:function(){CSSuite.info="Order.getBillingAddress";var a="method=getBillingAddress";jQuery.ajax({url:Order.getBillingAddressURL,cache:!1,data:a,success:function(a,b){$("#order_infopanel_billingaddress").html(a)},error:handleError,complete:function(a,b){},beforeSend:function(a){CSSuite.wait2($("#order_infopanel_billingaddress"))}})},removePaymentInstrument_dlg:function(a){Dialog.confirm("Please Confirm","Are you sure you want to remove the payment instrument?<br/>",function(){Order.removePaymentInstrument(a)})},removePaymentInstrument:function(a){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.removePaymentInstrument";var b=$("#removePayments").serialize();b+=a?"&"+a+"=true":"";var c=$("#removePayments").attr("action");jQuery.ajax({url:c,cache:!1,data:b,success:function(a,b){$("#order_infopanel_payments").html(a)},error:handleError,complete:function(a,b){CSSuite.modalRelease(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()},beforeSend:function(a){}})}},addPaymentInstrument:function(a){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.addPaymentInstrument";var b=$("#addPayments").serialize();b+=a?"&"+a+"=true":"";var c=$("#addPayments").attr("action");jQuery.ajax({type:"POST",url:c,cache:!1,data:b,success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){CSSuite.modalRelease(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()}})}},editPaymentInstrument:function(a){if(CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){CSSuite.info="Order.addPaymentInstrument";var b=$("#editPayment").serialize();b+=a?"&"+a+"=true":"";var c=$("#editPayment").attr("action");jQuery.ajax({type:"POST",url:c,cache:!1,data:b,success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){CSSuite.modalRelease(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()}})}},createBasket:function(a){CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)&&(CSSuite.info="Order.createOrder",jQuery.ajax({url:Order.createBasketUrl,cache:!1,data:{login:a?a:""},beforeSend:function(a){$("#lefttabs").tabs("option","selected",0),CSSuite.modalWait("retrieving basket information, please wait...")},success:function(a,b){$("#lineitems_details").html(a),CSSuite.debug(CSSuite.info+": "+b),Order.orderStatus=Order.STATUS_NEW,$("#product_search_panel_top").html('<a href="javascript:CSSuite.reset();">HOME</a> | <a href="javascript:Order.discardChanges();">Back to Search Results</a>')},error:handleError,complete:function(a,b){CSSuite.modalRelease(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()}}))},modifyOrder:function(a){CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)&&(CSSuite.info="Order.modifyOrder",Order.orderNo=a,jQuery.ajax({url:Order.modifyOrderUrl,cache:!1,data:"orderno="+a,beforeSend:function(a){$("#lefttabs").tabs("option","selected",0),CSSuite.modalWait("retrieving order information, please wait...")},success:function(a,b){$("#lineitems_details").html(a),CSSuite.debug(CSSuite.info+": "+b),Order.orderStatus=Order.STATUS_NEW,$("#product_search_panel_top").html('<a href="javascript:CSSuite.reset();">HOME</a> | <a href="javascript:Order.discardChanges();">Back to Search Results</a>')},error:handleError,complete:function(a,b){CSSuite.modalRelease(),CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()}}))},refreshAllDetails:function(){CSSuite.info="Order.refreshAllDetails";var a="method=refreshAllDetails";jQuery.ajax({url:Order.getCartInfoUrl,cache:!1,data:a,success:function(a,b){var c=$(a);$("#order_infopanel_customer").html(c.find("div#cart_general_info").html()),$("#order_infopanel_billingaddress").html(c.find("div#cart_payment_instruments").html()),$("#lineitems_details").html(c.find("div#cart_productLineItems").html()),$("#history_details").html(c.find("div#cart_history").html()),$("#notes_details").html(c.find("div#cart_notes").html()),$("#order_infopanel_payments").html(c.find("div#cart_paymentinstruments").html())},error:handleError,complete:function(a,b){},beforeSend:function(a){}})},removeLineItem_dlg:function(a){Dialog.confirm("Please Confirm","Are you sure you want to remove this line item?<br/>",function(){Order.removeLineItem(a)})},removeLineItem:function(a){CSSuite.lockAction(CSSuite.LOCK_SCOPE_MODIFY_ORDER)&&(CSSuite.info="Order.removeLineItem",jQuery.ajax({url:Order.removeLineItemUrl,cache:!1,data:"lineItem="+a,success:function(a,b){$("#GeneralJQueryDialog").html(a)},error:handleError,complete:function(a,b){CSSuite.releaseActionLock(CSSuite.LOCK_SCOPE_MODIFY_ORDER),Order.showStatus()}}))},updateLineItemQty:function(a,b){CSSuite.info="Order.updateLineItemQty";var c="lineItem="+a+"&qty="+b;jQuery.ajax({url:Order.updateLineItemQtyUrl,cache:!1,data:c,beforeSend:function(a){},error:handleError,success:function(a,b){$("#GeneralJQueryDialog").html(a)},complete:function(a,b){Order.showStatus()}})},reset:function(){this.orderNo=null,this.orderStatus=null},saveBillingAddress:function(a){CSSuite.info="Order.saveBillingAddress";var b=$("#editBillingAddress").serialize();b+=a?"&"+a+"=true":"";var c=$("#editBillingAddress").attr("action");jQuery.ajax({type:"POST",url:c,cache:!1,data:b,success:function(a,b){$("#GeneralJQueryDialog").html(a),CSSuite.debug(b)},error:handleError,complete:function(a,b){Order.showStatus()}})},saveOrder:function(a){CSSuite.info="Order.saveOrder";var b=$("#OrderSubmitForm").serialize();b+=a?"&"+a+"=true":"";var c=$("#OrderSubmitForm").attr("action");jQuery.ajax({type:"POST",url:c,cache:!1,data:b,success:function(a,b){$("#GeneralJQueryDialog").html(a),CSSuite.debug(b)},error:handleError,complete:function(a,b){}})},discardChanges:function(){if(!CSSuite.isActionLocked(CSSuite.LOCK_SCOPE_MODIFY_ORDER)){var a=function(){if(CSSuite.setContext(CSSuite.CONTEXT_GENERAL),Order.lastOrderSearchContext==Order.SEARCH_CONTEXT_CUSTOMER){var a=$(".tabs");a.find("ul.ui-tabs-nav a").eq(1).triggerHandler("change"),Order.getCustomerOrders()}else{Order.searchOrders();var a=$(".tabs");a.find("ul.ui-tabs-nav a").eq(0).triggerHandler("change")}$("#product_search_panel_top").html("&nbsp;")};this.orderStatus==this.STATUS_MODIFIED?Dialog.confirm("Please Confirm",'<div class="jquery_cancelchanges">Are you sure you want to go back to Search Results and discard all changes?</div><br/>',a):a()}},showStatus:function(){var a="<span style='color:green;'>New</span>";return 2==Order.orderStatus&&(a="<span style='color:orange;'>Modified</span>"),$("#order_status").html(a),Order.orderStatus},setStatus:function(a){Order.orderStatus=a},showAllOrders:function(){var a=/\d{2}\/\d{2}\/\d{4}$|^$/;a.test(document.getElementById("OrderSearchForm_OrderStartDate").value)?a.test(document.getElementById("OrderSearchForm_OrderEndDate").value)?this.searchOrders():(alert(document.getElementById("OrderSearchForm_OrderEndDate").value+" is not a valid date format! (MM/dd/yyyy)"),document.getElementById("OrderSearchForm_OrderEndDate").focus()):(alert(document.getElementById("OrderSearchForm_OrderStartDate").value+" is not a valid date format! (MM/dd/yyyy)"),document.getElementById("OrderSearchForm_OrderStartDate").focus())},setPriceValue:function(a){CSSuite.info="Order.setPriceValue";var b=a.substring(11),c=$("#"+a).val(),d="lineitemid="+b+"&pricevalue="+c;jQuery.ajax({url:Order.setPriceValueUrl,cache:!1,data:d,beforeSend:function(a){},error:handleError,success:function(a,b){Order.getProductLineItems(),Order.orderStatus=Order.STATUS_MODIFIED},complete:function(a,b){Order.showStatus()}})}};