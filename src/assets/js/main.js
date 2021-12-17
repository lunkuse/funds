// feather.replace();

var next_hero_feature = 1,
	next_featured_on = 1,
	next_security_feature = 1,
	next_our_user = 1,
	animate_mobile_items = true,
	as_seen_on_interval = null,
	normal_slide_speed = 10000,
	additional_slide_speed = 30000,
	page_visible = true;

function animate_hero_features() {
	if (page_visible === true) {
		var index = next_hero_feature + 1;

		$('#hero-content-container ul li').fadeOut('fast', function() {
			setTimeout(function() {
				$('#hero-content-container ul li:nth-child(' + index + ')').fadeIn('fast');
			}, 100);
		});

		next_hero_feature = next_hero_feature === $('#hero-content-container ul li').length - 1 ? 0 : next_hero_feature + 1;
	}
}

function animate_featured_on() {
	if (animate_mobile_items === true && page_visible === true) {
		var index = next_featured_on + 1;

		$('#as-seen-on-container a').fadeOut('fast', function() {
			setTimeout(function() {
				$('#as-seen-on-container-pagination-container a').removeClass('active');
				$('#as-seen-on-container-pagination-container a:nth-child(' + index + ')').addClass('active');

				$('#as-seen-on-container a:nth-child(' + index + ')').fadeIn('fast');
			}, 100);
		});

		next_featured_on = next_featured_on === $('#as-seen-on-container a').length - 1 ? 0 : next_featured_on + 1;
	}
}

function animate_security_features() {
	if (animate_mobile_items === true && page_visible === true) {
		var index = next_security_feature + 1;

		$('#security-section>div>div:last-child>div>div').fadeOut('fast', function() {
			setTimeout(function() {
				$('#security-section-pagination-container a').removeClass('active');
				$('#security-section-pagination-container a:nth-child(' + index + ')').addClass('active');

				$('#security-section>div>div:last-child>div>div:nth-child(' + index + ')').fadeIn('fast');
			}, 100);
		});

		next_security_feature = next_security_feature === $('#security-section>div>div:last-child>div>div').length - 1 ? 0 : next_security_feature + 1;
	}
}

function animate_our_users() {
	if (page_visible === true) {
		var index = next_our_user + 1;

		$('#our-users-section .images-container').attr('data-step', index);

		$('#our-users-section .text-container>div').fadeOut('fast', function() {
			setTimeout(function() {
				$('#our-users-section .text-container>div').removeClass('active');
				$('#our-users-section .text-container>div:nth-child(' + index + ')').addClass('active');

				$('#our-users-section .text-container>div:nth-child(' + index + ')').fadeIn('fast');
			}, 100);
		});

		next_our_user = next_our_user === $('#our-users-section .images-container img').length - 1 ? 0 : next_our_user + 1;
	}
}

$(document).ready(function() {
	animate_mobile_items = $(window).width() < 992;

	setInterval(animate_hero_features, normal_slide_speed);

	animation_interval = setInterval(function() {
		animate_featured_on();
		animate_security_features();

		setTimeout(animate_our_users, additional_slide_speed);
	}, normal_slide_speed);
});

$(window).on('scroll', function() {
	var scroll = $(window).scrollTop(),
		height = $(window).height();

	if (scroll > 40) {
		$('body').addClass('scrolled');
	}
	else {
		$('body').removeClass('scrolled');
	}

	if (scroll > height) {
		$('body').addClass('scrollable-to-top');
	}
	else {
		$('body').removeClass('scrollable-to-top');
	}

	$('.navbar-toggler').attr('data-scroll-ratio', scroll <= height * 0.25 ? '0' : scroll <= height * 0.5 ? '50' : scroll <= height * 0.75 ? '75' : '100');
});

$(window).on('resize', function() {
	animate_mobile_items = $(window).width() < 992;
});

$('#website-switch').on('click tap', function() {
	var state = $(this).attr('data-state');

	$(this).attr('data-state', state === 'off' ? 'on' : 'off');

	if (state === 'off') {
		setTimeout(function() {
			window.location = 'https://fundstrans.com';
		}, 1000);
	}
});

$('#as-seen-on-container-pagination-container a, #security-section-pagination-container a').on('click tap', function() {
	next_featured_on = $(this).index();

	clearInterval(animation_interval);

	animate_featured_on();
	animate_security_features();

	setTimeout(animate_our_users, additional_slide_speed);

	animation_interval = setInterval(function() {
		animate_featured_on();
		animate_security_features();

		setTimeout(animate_our_users, additional_slide_speed);
	}, normal_slide_speed);
});

document.addEventListener('visibilitychange', function() {
	page_visible = document.visibilityState === 'visible';
});

window.addEventListener('hashchange', function() {
	setTimeout(function() {
		window.scrollTo(window.scrollX, window.scrollY - $('header').height());
	}, 500);
});