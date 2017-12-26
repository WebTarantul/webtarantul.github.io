
$('.slider-promo').slick({
	autoplay:true,dots:true
});

 var link = document.querySelector(".btn-callback");
 var modal = document.querySelector(".modal-content");
 var modal_ov = document.querySelector(".overlay");
 var close_btn = document.querySelector(".close-form");
 var map = document.querySelector(".map-modal");
 var map_link = document.querySelector(".map")
 var close_map = document.querySelector(".close-map");

 link.addEventListener("click", function(event) {
			event.preventDefault();
			modal.classList.add("modal-show"); 
			modal_ov.classList.add("modal-show-ov")
			});

	close_btn.addEventListener("click", function(event){
    event.preventDefault();
    modal.classList.remove("modal-show");
    modal_ov.classList.remove("modal-show-ov");
});
map_link.addEventListener("click", function (event){
	event.preventDefault();
	map.classList.add("show-map");
	modal_ov.classList.add("modal-show-ov");
});
close_map.addEventListener("click", function(event){
    event.preventDefault();
    map.classList.remove("show-map");
    modal_ov.classList.remove("modal-show-ov");
});
