//= include ../../../bower_components/jquery/dist/jquery.js
//= include ../../../bower_components/jquery.fitvids/jquery.fitvids.js

jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()
	{
		//initFitVid();
	}

	// MAKES VIDEOS RESIZE RESPONSIVELY
	/* function initFitVid() {

		// TARGET YOUTUBE
		$('iframe[src*="youtube"]').parent().fitVids();

		// TARGET VIMEO
		$('iframe[src*="vimeo"]').parent().fitVids();

	} */

	return self;
}

//this show / hide button from https://www.templatemonster.com/blog/back-to-top-button-css-jquery/

jQuery(document).ready(function() {

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

    // code below from Amy Dutton - https://gist.github.com/ahaywood/d628596f4a5e7487c26b83096fd0530f

    $('.js-scroll-to-top').click(function(e){
		e.preventDefault();	// prevent the default browser action
	    var goto = $('#top');	// grab the #top element
	    var contentPosTop = $(goto).position().top - 50;	// determine the position from the top of the page

	    // Animate to that position
	    $('html, body').stop().animate({
	        scrollTop: contentPosTop
	    }, 1500);
	});

    var lastScrollTop = 0;
		$(window).scroll(function(event) {
			var st = $(this).scrollTop();
			if (st > lastScrollTop) {
				// downscroll code
				$(".back_to_top").addClass("scroll-down");
			} else if (st < 25) {
				// upscroll code
				$(".back_to_top").removeClass("scroll-down");
			}
			lastScrollTop = st;
		});
});
