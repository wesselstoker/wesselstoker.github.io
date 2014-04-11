/* =============================================================

	Smooth Scroll v4.3
	Animate scrolling to anchor links, by Chris Ferdinandi.
	http://gomakethings.com

	Additional contributors:
	https://github.com/cferdinandi/smooth-scroll#contributors

	Free to use under the MIT License.
	http://gomakethings.com/mit/

 * ============================================================= */

window.smoothScroll=function(e,t,n){"use strict";var r={speed:500,easing:"easeInOutCubic",updateURL:false,callbackBefore:function(){},callbackAfter:function(){}};var i=function(e,t){for(var n in t){e[n]=t[n]}return e};var s=function(e,t){if(e=="easeInQuad")return t*t;if(e=="easeOutQuad")return t*(2-t);if(e=="easeInOutQuad")return t<.5?2*t*t:-1+(4-2*t)*t;if(e=="easeInCubic")return t*t*t;if(e=="easeOutCubic")return--t*t*t+1;if(e=="easeInOutCubic")return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1;if(e=="easeInQuart")return t*t*t*t;if(e=="easeOutQuart")return 1- --t*t*t*t;if(e=="easeInOutQuart")return t<.5?8*t*t*t*t:1-8*--t*t*t*t;if(e=="easeInQuint")return t*t*t*t*t;if(e=="easeOutQuint")return 1+ --t*t*t*t*t;if(e=="easeInOutQuint")return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t;return t};var o=function(e,t){var n=0;if(e.offsetParent){do{n+=e.offsetTop;e=e.offsetParent}while(e)}n=n-t;if(n>=0){return n}else{return 0}};var u=function(e){if(e===null||e===n){return{}}else{var t={};e=e.split(";");e.forEach(function(e){e=e.trim();if(e!==""){e=e.split(":");t[e[0]]=e[1].trim()}});return t}};var a=function(e,t){if((t===true||t==="true")&&history.pushState){history.pushState({pos:e.id},"",e)}};var f=function(n,f,l,c){l=i(r,l||{});var h=u(n?n.getAttribute("data-options"):null);var p=h.speed||l.speed;var d=h.easing||l.easing;var v=h.updateURL||l.updateURL;var m=t.querySelector("[data-scroll-header]");var g=m===null?0:m.offsetHeight+m.offsetTop;var y=e.pageYOffset;var b=o(t.querySelector(f),g);var w;var E=b-y;var S=0;var x,T;if(n&&n.tagName==="A"&&c){c.preventDefault()}a(f,v);var N=function(){var r=e.pageYOffset;if(T==b||r==b||e.innerHeight+r>=t.body.scrollHeight){clearInterval(w);l.callbackAfter(n,f)}};var C=function(){S+=16;x=S/p;x=x>1?1:x;T=y+E*s(d,x);e.scrollTo(0,Math.floor(T));N(T,b,w)};var k=function(){l.callbackBefore(n,f);w=setInterval(C,16)};k()};var l=function(n){if("querySelector"in t&&"addEventListener"in e&&Array.prototype.forEach){n=i(r,n||{});var s=t.querySelectorAll("[data-scroll]");Array.prototype.forEach.call(s,function(e,t){e.addEventListener("click",f.bind(null,e,e.getAttribute("href"),n),false)})}};return{init:l,animateScroll:f}}(window,document)