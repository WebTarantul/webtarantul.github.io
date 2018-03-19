$(function() {

      $("#my-menu").mmenu({
      
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

});
