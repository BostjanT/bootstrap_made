// back to top
$(document).scroll(function() {
	let position = $(this).scrollTop();
	if (position >= 718) {
		$('#banner').addClass('scrollTop');
	} else {
		$('#banner').removeClass('scrollTop');
	}
});

$('.parent-container').magnificPopup({
	delegate: 'a', // child items selector, by clicking on it popup will open
	type: 'image',
	// other options
	gallery: {
		// options for gallery
		enabled: true
	}
});

$('#back-to-top').click(function(link) {
	link.preventDefault();
	let target = $(this).attr('href');
	$('html, body').stop().animate(
		{
			scrollTop: $(target).offset().top
		},
		'slow'
	);
});

/* let myBtn = document.querySelector('.scrollTop');
window.scroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		myBtn.style.display = 'block';
	} else {
		myBtn.style.display = 'none';
	}
} */
