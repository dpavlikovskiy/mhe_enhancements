var StoreDetail={initialLocation:null,browserSupportFlag:new Boolean,distanceChecker:null,storeurl:null,markerurl:null,queryurl:null,cookieurl:null,cookiename:null,defaultlocation:null,zoomradius:{},markers:[],infowindows:[],radius:50,map:null,unit:"km",timer:null,maptype:null,serachrefineurl:null,barurl:null,resturl:null,shoprurl:null,latitude:null,longitude:null,name:null,address:null,city:null,state:null,init:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){this.zoomradius=a,this.storeurl=b,this.lodgeurl=c,this.queryurl=d,this.cookieurl=e,this.cookiename=f,this.defaultlocation=g,this.maptype=h,this.serachrefineurl=i,this.barurl=j,this.resturl=k,this.shopurl=l,this.latitude=m,this.longitude=n,this.name=o,this.address=p,this.city=q,this.state=r;var s={center:new google.maps.LatLng(this.latitude,this.longitude),zoom:14,mapTypeId:google.maps.MapTypeId[h]};$("#map_canvas").html(""),map=new google.maps.Map(document.getElementById("map_canvas"),s);var t=new google.maps.Marker({position:new google.maps.LatLng(this.latitude,this.longitude),map:map,title:this.name+" "+this.address+" "+this.city,icon:this.lodgeurl,storeid:this.name}),u='<div class="mapContent"><h1>'+this.name+'</h1><div class="contentBody"><p>'+this.address+"</p><p>"+this.city+"</p></div></div>";this.markers.push(t),this.infowindows[this.name+"Info"]=new google.maps.InfoWindow({content:u,position:t.position}),google.maps.event.addListener(t,"click",function(){$(this).attr("style","font-weight:bold;"),StoreDetail.closeInfoWindows(),StoreDetail.infowindows[this.storeid+"Info"].open(map)})},closeInfoWindows:function(){for(i in this.infowindows)"object"==typeof this.infowindows[i]&&this.infowindows[i].close()},geoCode:function(a,b){var c=new google.maps.Geocoder;c.geocode({address:a},function(a,c){b(a,c)})},reverseGeocode:function(a,b){var c=new google.maps.Geocoder;c.geocode({latLng:a},function(a,c){c==google.maps.GeocoderStatus.OK&&b(a)})},calculateCurrentPosition:function(){var a=map.getCenter();StoreDetail.getGeoPosition(a)},getPreferredLocation:function(){var a=this.getCookieLatLng();a&&this.reverseGeocode(a,function(a){var b="";for(var c in a)if("postal_code"==a[c].types||"locality"==a[c].types){b=a[c].formatted_address;break}$("#prefposition").html(b)})},getCookieLatLng:function(){if(!this.readCookie(this.cookiename))return null;var a=this.readCookie(this.cookiename).split(","),b=new google.maps.LatLng(a[0],a[1]);return b},readCookie:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length+1,e.length-1)}return null},getDistance:function(a,b){if(!a||!b)return 0;var c=6371,d=(b.lat()-a.lat())*Math.PI/180,e=(b.lng()-a.lng())*Math.PI/180,f=Math.sin(d/2)*Math.sin(d/2)+Math.cos(a.lat()*Math.PI/180)*Math.cos(b.lat()*Math.PI/180)*Math.sin(e/2)*Math.sin(e/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),h=c*g;return h}};