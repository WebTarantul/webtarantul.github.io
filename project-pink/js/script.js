$(document).ready(function(){

  $(".reviews").slick({
    dots: true,
    speed: 500,
    mobileFirst: true
  });

});
function initMap() {
        var uluru = {lat: 59.938794, lng: 30.323083};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: 'img/icons/icon-map-marker.svg'
        });
      }
var mainHeader = document.querySelector(".main-header");
var navToggle = document.querySelector(".menu__toggle");
var menu = document.querySelector(".menu");

navToggle.addEventListener("click", function() {
  if (mainHeader.classList.contains("menu--opened")) {
     mainHeader.classList.remove("menu--opened");
     navToggle.classList.remove("menu__toggle--active");
     navToggle.classList.add("menu__toggle--free");
  }else{
    mainHeader.classList.add("menu--opened");
    navToggle.classList.add("menu__toggle--active");

  }

});
