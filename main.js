$( document ).ready(function() {
   
  	//Mobile Menu  
	$('.mobile-menu-button').click(function() {
	    $(this).toggleClass('expanded').siblings('ul').slideToggle();
	  });

	//Marquee selected element
	$("li > a").on("click", function () {
		var imgbg = $(this).attr('data');
    $('.hero').css('background-image', 'url("' + $(this).data("backgroundurl") + '")');
	})

	//News Transition
	var $headerHeight = $("nav").outerHeight();
	$("#news-button").click(function() {
	  $('html, body').animate({
	      scrollTop: $("#news").offset().top - $headerHeight
	  }, 1000);
	});

	//Youtube video aspect ratio
	var $allVideos = $("iframe[src^='//www.youtube.com']"),
	    $fluidEl = $("body");
		$allVideos.each(function() {
		  $(this)
		    .data('aspectRatio', this.height / this.width)
		    .removeAttr('height')
		    .removeAttr('width');
		});

	$(window).resize(function() {
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
	    var $el = $(this);
	    $el
	      .width(newWidth)
	      .height(newWidth * $el.data('aspectRatio'));
	  });
	}).resize();
});


