// Función para mostrar modal de contacto
function mostrarContacto() {
	$('.overlay').fadeIn('slow')
	$('#contenedorContacto').addClass('visible');
}
// Función para ocultar modal de contacto
function ocultarContacto() {
	$('.overlay').fadeOut('slow')
  $('#contenedorContacto').removeClass('visible')
}
// Función ocultar modal contacto con tecla ESC
function ocultarContactoEsc(e) {
  if (e.key == "Escape") {
    $(".modalContacto").removeClass('visible');
    $('.overlay').fadeOut('slow')
  }
}

$(document).ready(function () {
  // Función para mostrar y ocultar boton de whatsapp
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
      $("#whatsapp-btn").fadeIn(300);
		} else {
      $("#whatsapp-btn").fadeOut(300);
    }
	});

  // Mostrar 2do logo
  $('.navbar-toggler').click(() => {
    console.log('mostrar 2do logo')
    $('.contLogo>a').toggle("slow")
    $('.logo__index').toggle('fast')
  })

	let contacto = $('[data-open]')[0]

	$(contacto).click(mostrarContacto)
	$('.overlay').click(ocultarContacto)
  $(document).keyup(ocultarContactoEsc);
});

