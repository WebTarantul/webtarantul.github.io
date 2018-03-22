$(function() {

      $("#my-menu").mmenu({
      	"pageScroll": true,
      
          extensions: [
          "fx-listitems-drop",
          "pagedim-white",
          "fx-menu-slide"
          ],
          navbar: {
    title: '<span class="logo__img--favicon">D</span>'
  }
      });
      var API = $("#my-menu").data( "mmenu" );
      API.bind('open', function(){
      	$('.hamburger').addClass('is-active');
      }).bind('closed', function(){
      	$('.hamburger').removeClass('is-active');
      	$('.main-nav__item.mm-selected').removeClass('mm-selected');
      })

  $('.reviews__corousel').owlCarousel({
  	loop: true,
  	smartSpeed: 700,
  	nav: true,
  	autoplay: true,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        960:{
            items:1,
            nav:false
        },
        1920:{
            items:1,
            nav:true,
            loop:false
        }
    }
  	
  });

});


