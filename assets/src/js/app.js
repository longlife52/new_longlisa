/*jshint browser:true */

/*!
* FitVids 1.1
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };

  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;

// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );



/* ----------------------------------------------- */


/* CUSTOM SITE CODE */
jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()
	{
		initFitVid();
        initVideoClick();
	}

	// MAKES VIDEOS RESIZE RESPONSIVELY
    function initFitVid() {
        $('.fitvids').fitVids();
	}

    // Reference: https://stackoverflow.com/questions/8492239/click-on-image-splashscreen-to-play-embedded-youtube-movie 
    function initVideoClick() {
        $('.js-video').click(function(e) {
            e.preventDefault();
            var $placeholder = $(this).find('img');
            var video = '<iframe src="' + $placeholder.attr('data-video') + '" </iframe>';
            $placeholder.replaceWith(video);
            initFitVid();
        });

    }


	return self;
}

// for nav current page highlight
// code FROM
// http://huidesign.com/automatically-highlight-current-page-in-navigation-with-css-jquery/

$(document).ready(function(){

    var str=location.href.toLowerCase();

    $(".navigation li a").each(function() {
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.highlight").removeClass("highlight");
            $(this).parent().addClass("highlight");
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
