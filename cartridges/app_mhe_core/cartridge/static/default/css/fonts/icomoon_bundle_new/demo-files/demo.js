"boxShadow"in document.body.style||document.body.setAttribute("class","noBoxShadow"),document.body.addEventListener("click",function(a){var b=a.target;"INPUT"===b.tagName&&-1===b.getAttribute("class").indexOf("liga")&&b.select()}),function(){function a(){d.innerHTML=e.value||String.fromCharCode(160),window.icomoonLiga&&window.icomoonLiga(d)}function b(){d.style.fontSize=c.value+"px"}var c=document.getElementById("fontSize"),d=document.getElementById("testDrive"),e=document.getElementById("testText");c.addEventListener("change",b,!1),e.addEventListener("input",a,!1),e.addEventListener("change",a,!1),b()}();