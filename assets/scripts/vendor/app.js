$(document).ready(function () {
	// ------------------------------------------------------------------------------ //
	// Navigation
	// ------------------------------------------------------------------------------ //
	$(document).ready(function () {
		$('#nav-icon').click(function () {
			$(this).toggleClass('open');
		});
	});




	// $(document).ready(function () {
	// 	$('a[href^="#"]').on('click', function (e) {
	// 		e.preventDefault();
	// 		var target = this.hash;
	// 		var $target = $(target);

	// 		//scroll con hash
	// 		$('html, body').animate({
	// 			'scrollTop': $target.offset().top
	// 		}, 1000, 'swing', function () {
	// 			window.location.hash = target;
	// 		});

	// 		//scroll sin hash
	// 		$('html, body').animte({
	// 			'scrollTop': $targer.offset().top
	// 		}, 1000, 'swing');
	// 	});
	// });




	// ------------------------------------------------------------------------------ //
	// Color plate
	// ------------------------------------------------------------------------------ //
	$('.color-plate').on('click', function () {
		var name = $(this).attr('data-color');
		$('link[id="skin"]').attr('href', '/css/themes/' + name + '.css');
		$('.btn').addClass('btn-' + name);
	});

	$('.panel-option').on('click', function () {
		$('.option-panel').toggleClass('option-panel-collased');

	});

	//SMOOTH SCROLL MENU
	$(document).ready(function () {
		$("a").on('click', function (event) {
			if (this.hash !== "") {
				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 1000, function () {
					window.location.hash = hash;
				});
			}
		});
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {

			$(".navbar-soft").addClass("fixed-top");
		} else {
			$(".navbar-soft").removeClass("fixed-top");

		}
	});




	// ------------------------------------------------------------------------------ //
	// Testimonial
	// ------------------------------------------------------------------------------ //

	$('.testimonial').owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		autoplay: true,
		// autoplayTimeout: 5000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		smartSpeed: 1200,
		autoHeight: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});


	$('.section__testimonial-wrap').owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		autoplay: true,
		// autoplayTimeout: 5000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		smartSpeed: 1200,
		autoHeight: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});


	$('.section__blog-post').owlCarousel({
		loop: true,
		margin: 25,
		nav: true,
		dots: false,
		autoplay: true,
		// autoplayTimeout: 5000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		smartSpeed: 1200,
		autoHeight: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	// ------------------------------------------------------------------------------ //
	// Scroll To Top
	// ------------------------------------------------------------------------------ //
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) {
			// If page is scrolled more than 50px
			$("#return-to-top").fadeIn(200); // Fade in the arrow
		} else {
			$("#return-to-top").fadeOut(200); // Else fade out the arrow
		}
	});
	$("#return-to-top").click(function () {
		// When arrow is clicked
		$("body,html").animate(
			{
				scrollTop: 0 // Scroll to top of body
			},
			500
		);
	});



});
