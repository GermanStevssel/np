// Función para mostrar modal de contacto
function mostrarContacto() {
	$('.overlay').fadeIn('slow')
	let modalId = this.dataset.open;
	console.log(modalId)
	$(`#${modalId}`).addClass('visible');
}
// Función para ocultar modal de contacto
function ocultarModal() {
	$('.modalContacto').animate({
		left: '-200vw'}
	)
	$('.overlay').fadeOut('slow')
}

// Función para mostrar y ocultar boton de whatsapp
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
      $("#whatsapp-btn").fadeIn(300);
		} else {
      $("#whatsapp-btn").fadeOut(300);
    }
	});

	let contacto = $('[data-open]')[0]

	$(contacto).click(mostrarContacto)
	$('.overlay').click(ocultarModal)
});

