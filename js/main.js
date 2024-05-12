import isCuil from "./validate-cuil.js";
import isLegalAge from "./validate-age.js";

const formInput = document.querySelectorAll('[required]');

formInput.forEach( (input) => {
    input.addEventListener( 'blur', () => { verifyInput(input) } );
} );

function verifyInput(input) {
    if (input.name === 'cuil' && input.value.length >= 11) {
        isCuil(input);
    };

    if ( input.name === 'fecha_nacimiento' && input.value !== '' ) {
        validateAge(input);
    };
};