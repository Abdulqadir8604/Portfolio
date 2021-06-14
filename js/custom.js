// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg",
			 "images/397969.jpg",
			 "images/wp2465273.jpg",
			 "images/wp2566029.jpg",
			 "images/photo-1561211919-1947abbbb35b.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})