!function(e){e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(n){e.setTimeout(n,1e3/60)}}()}(window),function(e){function n(n,t,o){var i=-1!==navigator.userAgent.indexOf("Firefox")||-1!==navigator.userAgent.indexOf("MSIE")?document.documentElement:document.body,r=i.scrollTop,u=n-r,a=0,l=20;t="undefined"==typeof t?500:t;var s=function(){a+=l;var n=Math.easeInOutQuad(a,r,u,t);i.scrollTop=n,t>a?e.requestAnimationFrame(s):"function"==typeof o&&o()};s()}Math.easeInOutQuad=function(e,n,t,o){return e/=o/2,1>e?t/2*e*e+n:(e--,-t/2*(e*(e-2)-1)+n)},Math.easeInCubic=function(e,n,t,o){var i=(e/=o)*e*e;return n+t*i},Math.inOutQuintic=function(e,n,t,o){var i=(e/=o)*e,r=i*e;return n+t*(6*r*i+-15*i*i+10*r)},e.animScrollTo=n}(window),function(e){function n(){var n=navigator.userAgent;return-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")?e.history&&"pushState"in e.history:!1}e.perfTooling=e.perfTooling||{},e.perfTooling.features=e.perfTooling.features||{},e.perfTooling.features.history=n()}(window),function(e){function n(n){n=n||{},n.data&&(n.elements.input&&(o.input=document.querySelector(n.elements.input),o.input.addEventListener("keyup",function(e){t(n.data,e.target.value.toLowerCase())}),o.input.addEventListener("search",function(e){t(n.data,e.target.value.toLowerCase())})),n.elements.list&&(o.list=document.querySelector(n.elements.list),o.list.addEventListener("click",function(n){var t=n.target.dataset.fuzzy;t&&o.input&&(n.preventDefault(),o.input.getBoundingClientRect().top<0?e.animScrollTo(o.input.offsetTop,600,function(){o.input.value=t,o.input.dispatchEvent(new KeyboardEvent("keyup"))}):(o.input.value=t,o.input.dispatchEvent(new KeyboardEvent("keyup"))))})))}function t(e,n){history.pushState(null,null,"?q="+n);var t=0,i=n.split(" "),r=i.length;e.forEach(function(e){var n=0,o=!0;for(void 0===e.elem&&(e.elem=document.getElementById(e.name));r>n;++n)-1===e.fuzzy.indexOf(i[n])&&(o=!1);o&&++t,e.elem.classList.toggle("is-hidden",!o)}),o.noResultsMsg.classList.toggle("is-hidden",0!==t)}var o={noResultsMsg:document.getElementById("noResultMsg")};e.perfTooling=e.perfTooling||{},e.perfTooling.components=e.perfTooling.components||{},e.perfTooling.components.fuzzy={init:function(e){n(e)}}}(window),function(e,n){function t(){var n=e.querySelector(".nav-main");e.querySelector(".btn-nav").addEventListener("click",function(){n.classList.toggle("nav-open")})}window.addEventListener("load",function(){for(var n=e.querySelectorAll(".contributor > a"),t=n.length,o=0;t>o;++o)n[o].innerHTML='<img src="'+n[o].dataset.url+'" width="40" height="40" title="'+n[o].dataset.login+'" class="contributor-avatar">'});var o=e.querySelectorAll(".js-scroll");o.length&&Array.prototype.forEach.call(o,function(n){n.addEventListener("click",function(){window.animScrollTo(e.getElementById(n.href.split("#")[1]).offsetTop,600)})}),"undefined"!=typeof n&&window.perfTooling.features.history&&window.perfTooling.components.fuzzy.init({elements:{input:"#fuzzzzzzzzzy",list:".posts"},data:n}),t()}(document,window.list);