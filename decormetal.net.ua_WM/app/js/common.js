
$(document).ready(function(){
    $("#main_header__btn_more").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);

    });
});
$(function() {
      $("#my-menu").mmenu({
         "pageScroll": true,	
          extensions: [
          "fx-listitems-drop",
          "pagedim-white",
          "fx-menu-slide"
          ],
          navbar: {
    title: '<span class="logo__img--favicon">DM</span>'
  				}
      });


var api = $("#my-menu").data("mmenu");

api.bind('open:finish', function() {
$('.hamburger').addClass('is-active');
});
api.bind('close:finish', function() {
$('.hamburger').removeClass('is-active');
$('.main-nav__item.mm-listitem_selected').removeClass('mm-listitem_selected');
});



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

  $( ".main-footer__btn" ).on( "click", function(){
      $( ".modal-form" ).show(500);
      $( ".overley" ).addClass( "o-show" );
    });
  $( ".modal-form__btn" ).on( "click", function(){
      $( ".modal-form" ).hide(500);
       $( ".overley" ).removeClass( "o-show" );
    });
  $( ".overley" ).on( "click", function(){
      $( ".modal-form" ).hide(500);
       $( ".overley" ).removeClass( "o-show" );

    });

  $( ".callback__btn" ).on( "click", function(){
      $( ".modal-form" ).show(500);
      $( ".overley" ).addClass( "o-show" );
    });
   $( ".main-header__btn" ).on( "click", function(){
      $( ".modal-form" ).show(500);
      $( ".overley" ).addClass( "o-show" );
    });
   $( ".main-header__btn-price" ).on( "click", function(){
      $( ".modal-form" ).show(500);
      $( ".overley" ).addClass( "o-show" );
    });
   $( ".main-header__link-galery--konsutacia" ).on( "click", function(event){
   			event.preventDefault();
      $( ".modal-form" ).show(500);
      $( ".overley" ).addClass( "o-show" );
    });

   // FOTORAMA
  $('.fotorama').fotorama({
  spinner: {
    lines: 13,
    color: '#F4424E'
  }
});
  
  			// функція анімованого переходу до якоря
$( "#main_header__btn_more" ).on( "click", function(){
      event.preventDefault();
       $.scrollport( "#company");
    });
});


