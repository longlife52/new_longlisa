function SiteController(o){return self.init=function(){},self}jQuery(function(o){new SiteController(o).init()}),$(document).ready(function(){var o=location.href.toLowerCase();console.log("test"),$(".navigation li a").each(function(){-1<o.indexOf(this.href.toLowerCase())&&($("li.highlight").removeClass("highlight"),$(this).parent().addClass("highlight"))})}),jQuery(document).ready(function(){var o=$("#button");$(window).scroll(function(){300<$(window).scrollTop()?o.addClass("show"):o.removeClass("show")}),$(".js-scroll-to-top").click(function(o){o.preventDefault();var t=$("#top"),n=$(t).position().top-50;$("html, body").stop().animate({scrollTop:n},1500)});var n=0;$(window).scroll(function(o){var t=$(this).scrollTop();n<t?$(".back_to_top").addClass("scroll-down"):t<25&&$(".back_to_top").removeClass("scroll-down"),n=t})});