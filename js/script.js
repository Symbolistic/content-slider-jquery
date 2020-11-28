$(document).ready(() => {
	let speed = 500; // Fade speed
	let autoswitch = true; // auto slider option
	let autoswitch_speed = 4000; // auto slider speed

	// Add initial active class
	$('.slide').first().addClass('active');

	// Hide all slides
	$('.slide').hide();

	// Show first slide
	$('.active').show();

	// Switch to next slide
	const nextSlide = () => {
		$('.active').removeClass('active').addClass('oldActive');

		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	};

	// Switch to prev slide
	const prevSlide = () => {
		$('.active').removeClass('active').addClass('oldActive');

		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	};

	$('#next').on('click', () => nextSlide());

	$('#prev').on('click', () => prevSlide());

	// Auto Slider
	if (autoswitch === true) {
		setInterval(() => nextSlide(), autoswitch_speed);
	}
});
