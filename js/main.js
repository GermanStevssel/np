$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
      $("#whatsapp-btn").fadeIn(300);
		} else {
      $("#whatsapp-btn").fadeOut(300);
    }
	});
});