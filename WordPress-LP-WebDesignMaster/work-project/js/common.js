$(document).ready(function() {

$("a.menu-item[href*='#']").mPageScroll2id();

$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

	$(document).ready(function() {
		$('.porfolio-item__descr-open').magnificPopup({type:'inline'});
	});

	$(".portfolio-item").each(function(i) {
		$(this).find("a").attr("href", "#work-" + i);
		$(this).find(".porfolio-item__descr").attr("id", "work-" + i);
	});

	$("#portfolio_grid").mixItUp();

	$(".portfolio-nav li").click(function(){
		$(".s-content .portfolio-nav li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({
		type: 'image',
	  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	  zoom: {
	    enabled: true, // By default it's false, so don't forget to enable it

	    duration: 300, // duration of the effect, in milliseconds
	    easing: 'ease-in-out', // CSS transition easing function

	    // The "opener" function should return the element from which popup will be zoomed in
	    // and to which popup will be scaled down
	    // By defailt it looks for an image tag:
	    opener: function(openerElement) {
	      // openerElement is the element on which popup was initialized, in this case its <a> tag
	      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
	      return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  }

	});

	$(".top-name").animated("fadeInDown", "fadeOutUp");
	$(".top-text p, .section-header").animated("fadeInUp", "fadeOutDown");
	$(".animation-left").animated("fadeInLeft", "fadeOutDown");
	$(".animation-right").animated("fadeInRight", "fadeOutDown");
	$(".animation-center").animated("flipInY", "fadeOutDown");
	$(".left .resume-item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume-item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main-header").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	$(".toggle-menu").click(function(){
		$(".sandwich").toggleClass("active");

		if ($(".top-menu").is(":visible")) {
			$(".top-text").removeClass("opacity-h");
			$(".top-menu").fadeOut(600);
			$(".top-menu li a").removeClass("fadeInUp animated");
			$(".top-menu li a").addClass("fadeOutDown animated");
			$()
		} 

		else {
			$(".top-text").addClass("opacity-h");
			$(".top-menu").fadeIn(600);
			$(".top-menu li a").removeClass("fadeOutDown animated");
			$(".top-menu li a").addClass("fadeInUp animated");
		}
	});

	$(".top-menu ul a").click(function(){
		$(".top-menu").fadeOut(600);
		$(".top-menu li a").removeClass("fadeInUp animated");
		$(".top-text").removeClass("opacity-h");
	});
});
$(window).load(function() { 
	$(".loader-Inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 


});