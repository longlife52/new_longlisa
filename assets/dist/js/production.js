function SiteController(o){return self.init=function(){o(".fitvids").fitVids(),o(".js-video").click(function(t){t.preventDefault();var e=o(this).find("img"),i='<iframe src="'+e.attr("data-video")+'" </iframe>';e.replaceWith(i)})},self}!function(r){"use strict";r.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var e=document.head||document.getElementsByTagName("head")[0],o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.appendChild(o.childNodes[1])}return t&&r.extend(i,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&t.push(i.customSelector);var o=".fitvidsignore";i.ignore&&(o=o+", "+i.ignore);var e=r(this).find(t.join(","));(e=(e=e.not("object object")).not(o)).each(function(){var t=r(this);if(!(0<t.parents(o).length||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var e=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("name")){var i="fitvid"+r.fn.fitVids._count;t.attr("name",i),r.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),t.removeAttr("height").removeAttr("width")}})})},r.fn.fitVids._count=0}(window.jQuery||window.Zepto),jQuery(function(t){new SiteController(t).init()}),$(document).ready(function(){var t=location.href.toLowerCase();$(".navigation li a").each(function(){-1<t.indexOf(this.href.toLowerCase())&&($("li.highlight").removeClass("highlight"),$(this).parent().addClass("highlight"))}),$(".js-scroll-to-top").click(function(t){t.preventDefault();var e=$("#top"),i=$(e).position().top-50;$("html, body").stop().animate({scrollTop:i},1500)});var i=0;$(window).scroll(function(t){var e=$(this).scrollTop();i<e?$(".back_to_top").addClass("scroll-down"):e<25&&$(".back_to_top").removeClass("scroll-down"),i=e})});