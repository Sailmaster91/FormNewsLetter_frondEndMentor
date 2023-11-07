const formulario = document.getElementById('formulario');
formulario.correo.classList.remove('correo--error');
const ventanaSuscriptor = document.querySelector('.contenedor__subcriptor');
const ventanaConfimacion = document.querySelector('.contenedor-thanks');
const alert = formulario.querySelector('.validate-correo');

const imagenMobile = document.querySelector('.imagen__formulario .oculto');

window.addEventListener('resize', function (e) {
	if (window.innerWidth <= 400) {
		imagenMobile.classList.remove('oculto');
	} else {
		imagenMobile.classList.add('oculto');
	}
});

const validarCorreo = () => {
	const correo = formulario.correo;
	const validacionCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	const boton = document.querySelector('#submit-btn');

	if (!validacionCorreo.test(correo.value)) {
		formulario.correo.classList.add('correo--error');
		boton.classList.add('boton-deshabilitado');
		alert.classList.add('error');

		setTimeout(() => {
			alert.style.cssText = 'opacity: 1!important ; transform: translateY(0px);';
		}, 500);

		return false;
	} else {
		formulario.querySelector('.validate-correo').classList.remove('error');
		formulario.correo.classList.remove('correo--error');
		boton.classList.remove('boton-deshabilitado');
		setTimeout(() => {
			alert.style.cssText = 'opacity: 0 ; transform: translateY(20px); transition: all 100ms ease;';
		}, 1000);

		return true;
	}
};

correo.addEventListener('input', (e) => {
	validarCorreo();
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (validarCorreo()) {
		validarCorreo();
		const dissmisBtn = document.querySelector('.contenedor-thanks button');
		ventanaSuscriptor.classList.add('oculto');
		ventanaConfimacion.classList.remove('oculto');
		console.log(dissmisBtn);
		console.log('Enviando Correo');
		dissmisBtn.addEventListener('click', (e) => {
			e.preventDefault();
			ventanaSuscriptor.classList.remove('oculto');
			ventanaConfimacion.classList.add('oculto');
			formulario.correo.value = '';
		});
	}
});
