

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
 

});


 $(document).ready(function(){
	var link = document.querySelector(".main-footer__btn,.callback__btn");
 	var modal = document.querySelector(".modal-form");
 	var close_btn = document.querySelector(".modal-form__btn");

link.addEventListener("click", function(event) {
event.preventDefault();
modal.classList.add("modal-show"); 
});


close_btn.addEventListener("click", function(event){
    event.preventDefault();
    modal.classList.remove("modal-show");
});
});
