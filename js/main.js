import isCuil from "./validate-cuil.js";
import isLegalAge from "./validate-age.js";
import { errorTypes, messages } from "./custom-errors.js";

const formInput = document.querySelectorAll('[required]');

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