export default function isLegalAge( input ) {
    const birthdate = new Date( input.value );
    if ( !validateAge(birthdate) ) {
        input.setCustomValidity('Debes ser mayor de edad');
    };

};

function validateAge( date ) {
    const currentDate = new Date();
    const validDate = new Date( date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate() );

    return currentDate >= validDate;
};