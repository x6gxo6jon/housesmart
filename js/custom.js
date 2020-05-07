$(document).ready(function() {

	// carousel plugin initialization
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        960:{
	            items:3
	        },
	        1200:{
	            items:4
	        }
	    }
	})
});