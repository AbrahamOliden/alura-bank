import isCuil from "./validateCuil.js";

const formInput = document.querySelectorAll('[required]');

formInput.forEach( (input) => {
    input.addEventListener( 'blur', () => { verifyInput(input) } );
} );

function verifyInput(input) {
    if (input.name === 'cuil' && input.value.length >= 11) {
        isCuil(input);
    };
};