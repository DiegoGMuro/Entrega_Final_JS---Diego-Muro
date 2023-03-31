
// Validacion de edad minima y longitud de la psw
const edadMinima = 18;
const longitudPassword = 4;

//Creo formulario y lo agrego al HTML
const formulario = document.createElement('form');
formulario.id = 'formulario';
document.body.appendChild(formulario);


// Creo campos de día, mes y año para la fecha de nacimiento
const diaNacimiento = document.createElement('input');
diaNacimiento.type = 'number';
diaNacimiento.id = 'diaNacimiento';
diaNacimiento.placeholder = 'Día';
diaNacimiento.min = 1;
diaNacimiento.max = 31;
diaNacimiento.required = true;

const mesNacimiento = document.createElement('input');
mesNacimiento.type = 'number';
mesNacimiento.id = 'mesNacimiento';
mesNacimiento.placeholder = 'Mes';
mesNacimiento.min = 1;
mesNacimiento.max = 12;
mesNacimiento.required = true;

const anioNacimiento = document.createElement('input');
anioNacimiento.type = 'number';
anioNacimiento.id = 'anioNacimiento';
anioNacimiento.placeholder = 'Año';
anioNacimiento.min = 1900; // establece el año mínimo
anioNacimiento.max = new Date().getFullYear(); // establece el año máximo
anioNacimiento.required = true;


// Creo el botón de enviar
const enviar = document.createElement('button');
enviar.type = 'submit';
enviar.innerHTML = 'Ingrese fecha Nacim y genere PSW';


// Agrego los campos del formulario
formulario.append(diaNacimiento, mesNacimiento, anioNacimiento, enviar);


// Obtengo el elemento del HTML que mostrara el resultado
const resultado = document.getElementById('resultado');


// Agrego evento del formulario cuando lo envio
formulario.addEventListener('submit', function (event) {
	event.preventDefault(); // Evito el envio del formulario por defecto


// Obtengo los valores de día, mes y año de nacimiento del usuario
	const dia = diaNacimiento.value;
	const mes = mesNacimiento.value;
	const anio = anioNacimiento.value;


// Obtengo el año actual
	const anioActual = new Date().getFullYear();


// Calculo la edad del usuario
	const edadUsuario = anioActual - anio;


// Si el usuario es mayor de 18 años, genero una contraseña aleatoria
	if (edadUsuario >= edadMinima) {
		let password = '';
		for (let i = 0; i < longitudPassword; i++) {
			password += Math.floor(Math.random() * 10);
		}
		// Muestro la contraseña generada en el elemento de resultado
		resultado.innerHTML = `Su contraseña aleatoria es: <span class="password">${password}</span> y su fecha de nacimiento fue el ${dia}-${mes}-${anio}`;
		// Guardo la psw en sessionStorage
		sessionStorage.setItem('password', password);
	} else {
		resultado.innerHTML = 'Debe ser mayor de 18 años para generar una contraseña';
	}
});




