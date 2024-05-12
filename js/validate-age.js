export default function isLegalAge( input ) {
    const birthdate = new Date( input.value );
    validateAge(birthdate);

    console.log(validateAge(birthdate));
};

function validateAge( date ) {
    const currentDate = new Date();
    const validDate = new Date( date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate() );

    return currentDate >= validDate;
};