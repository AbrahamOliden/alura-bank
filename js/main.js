import isCuil from "./validate-cuil.js";
import isLegalAge from "./validate-age.js";
import { errorTypes, messages } from "./custom-errors.js";

const formInput = document.querySelectorAll('[required]');
const form = document.querySelector('[data-formulario]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const listOfAnswers = {
        nombre: event.target.elements['nombre'].value,
        email: event.target.elements['email'].value,
        identificacion: event.target.elements['identificacion'].value,
        cuil: event.target.elements['cuil'].value,
        fecha_nacimiento: event.target.elements['fecha_nacimiento'].value
    };

    localStorage.setItem('registro', JSON.stringify( listOfAnswers) );
    window.location = './abrir-cuenta-form-2.html';
} );

formInput.forEach( (input) => {
    input.addEventListener( 'blur', () => verifyInput(input) );
    input.addEventListener( 'invalid', (event) => event.preventDefault() );
} );

function verifyInput(input) {
    let message = '';
    input.setCustomValidity('');

    if (input.name === 'cuil' && input.value.length >= 11) {
        isCuil(input);
    };

    if ( input.name === 'fecha_nacimiento' && input.value !== '' ) {
        isLegalAge(input);
    };

    errorTypes.forEach( (error) => {
        if ( input.validity[error] ) {
            message = messages[input.name][error];
            console.log(message);
        };
    } );

    const errorMessage = input.parentNode.querySelector('.mensaje-error');
    const validateInput = input.checkValidity();

    if ( !validateInput ) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = '';
    };

};