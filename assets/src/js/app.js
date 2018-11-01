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
		initFitVid();
	}

	// MAKES VIDEOS RESIZE RESPONSIVELY
	function initFitVid() {

		// TARGET YOUTUBE
		$('iframe[src*="youtube"]').parent().fitVids();

		// TARGET VIMEO
		$('iframe[src*="vimeo"]').parent().fitVids();

	}

	return self;
}

//the code below for the scroll button is from
/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
