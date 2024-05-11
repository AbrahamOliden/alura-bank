const formInput = document.querySelectorAll('[required]');

formInput.forEach( (input) => {
    input.addEventListener( 'blur', () => { verifyInput(input) } );
} );

function verifyInput(input) {
    console.log(input.name);
};