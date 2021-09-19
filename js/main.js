// Función para mostrar contacto
function mostrarContacto() {
	$('.overlay').fadeIn('slow')
	$('.modalContacto').animate({
		left: '0',
		right: '0'}
	)
}
// Función para ocultar modal
function ocultarModal() {
	$('.modalContacto').animate({
		right: '-200vw'}
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

	$('#contacto').click(mostrarContacto)
	$('.overlay').click(ocultarModal)
});

