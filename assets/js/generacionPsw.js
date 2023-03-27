
// Validacion de edad minima y longitud de la psw
const edadMinima = 18;
const longitudPassword = 4;

//Creo formulario y lo agrego al HTML
const formulario = document.createElement('form');
formulario.id = 'formulario';

document.body.appendChild(formulario);

// Creo campo de fecha de nacimiento y boton de enviar
const nacimiento = document.createElement('input');
nacimiento.type = 'date';
nacimiento.id = 'nacimiento';
nacimiento.required = true;

const enviar = document.createElement('button');
enviar.type = 'submit';
enviar.innerHTML = 'Ingrese fecha Nacim y genere PSW';


// Agrego los campos del formulario
formulario.append(nacimiento, enviar);


// Obtengo el elemento del HTML que mostrara el resultado
const resultado = document.getElementById('resultado');

// Agrego evento del formulario cuando lo envio
formulario.addEventListener('submit', function (event) {
	event.preventDefault(); // Evito el envio del formulario por defecto


	// Obtengo el año de nacimiento del usuario
	const anioNacimiento = nacimiento.value.substring(0, 4);


	// Obtengo el año actual
	const anioActual = new Date().getFullYear();


	// Calculo la edad del usuario
	const edadUsuario = anioActual - anioNacimiento;

	// Si el usuario es mayor de 18 años, genero una contraseña aleatoria
	if (edadUsuario >= edadMinima) {
		let password = '';
		for (let i = 0; i < longitudPassword; i++) {
			password += Math.floor(Math.random() * 10);
		}
		// Muestro la contraseña generada en el elemento de resultado
		resultado.innerHTML = `Su contraseña aleatoria es: <span class="password">${password}</span>`;
		// Guardo la psw en sessionStorage
		sessionStorage.setItem('password', password);
	} else {
		resultado.innerHTML = 'Debe ser mayor de 18 años para generar una contraseña';
	}
});




