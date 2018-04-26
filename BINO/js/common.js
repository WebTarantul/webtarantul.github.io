$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});
$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
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
	$( ".recent__filter-link" ).click(function( event ) {
  event.preventDefault();
});

$(document).ready(function(){
  $('.case__list').slick({
		accessibility: false,
    dots: true
  });

  $(".menu__toggle").click(function(event){
  	if($(this).is(".menu__toggle--active")){
  		$(this).removeClass("menu__toggle--active");
  		$(".main-header__top-line").removeClass("main-header__top-line--active");
  	}else
  	{
  		$(this).addClass("menu__toggle--active");
  		$(".main-header__top-line").addClass("main-header__top-line--active");
  	}
  	
  });
});

