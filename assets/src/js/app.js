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
