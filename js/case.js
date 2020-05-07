$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,

	     navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    scrollbar: {
	      el: '.swiper-scrollbar',
	    },
	})
})

