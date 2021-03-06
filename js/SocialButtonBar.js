function SocialButtonBar()
{
	"use strict";

	var URL = encodeURIComponent(window.location);
	var TITLE = encodeURIComponent($('meta[property="og:title"]').attr('content'));
	var TWITTER_HANDLE = encodeURIComponent($('meta[name="twitter:site"]').attr('content').replace('@',''));
	var HASHTAGS = "StoryMaps";

	$(".social-button-bar")
		.append(
			$("<a>")
				.attr("tabindex", "0")
				.append($("<i>").addClass("fa fa-facebook"))
				.click(shareFacebook)
				.keydown(
					function(event) {
						if (event.which !== 13) {
							return;
						}
						shareFacebook();
					}
				)			
		)
		.append(
			$("<a>")
				.attr("tabindex", "0")
				.append($("<i>").addClass("fa fa-twitter"))
				.click(shareTwitter)
				.keydown(
					function(event) {
						if (event.which !== 13) {
							return;
						}
						shareTwitter();
					}
				)			
		);

	function shareFacebook()
	{
		window.open(
			'http://www.facebook.com/sharer/sharer.php?u=' + URL,
			'',
			'toolbar=0,status=0,width=626,height=436'
		);
	}

	function shareTwitter()
	{
		var twitterOptions = 'text=' + TITLE + 
		    '&url=' + URL	+ 
		    '&via=' + TWITTER_HANDLE + 
		    '&hashtags=' + HASHTAGS;
		window.open(
			'https://twitter.com/intent/tweet?' + twitterOptions,
			'Tweet',
			'toolbar=0,status=0,width=626,height=436'
		);
	}

}

SocialButtonBar.prototype = {};