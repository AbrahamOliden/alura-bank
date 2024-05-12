export default function isCuil (input) {
    const cuil = input.value.replace(/[-\/]/g, '');

    if ( hasRepeatedNumbers(cuil) ) {
        console.log('Repeated values');
    } else {
        if ( validateFirstDigits(cuil) && validateVerifier(cuil) ) {
            console.log('Valid CUIL');
        } else {
            console.log('CUIL does not exist');
        };
    };
};

function hasRepeatedNumbers(cuil) {
    const repeatedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return repeatedNumbers.includes(cuil);
};

function validateFirstDigits(cuil) {
    let firstDigits = cuil.substr(0,2);
    let validDigits = ['20', '23', '24', '27', '30', '33', '34'];

    return validDigits.includes(firstDigits);
};

function validateVerifier(cuil) {
    let accumulated = 0;
    const factors = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 10; i++) {
        accumulated += parseInt(cuil[i], 10) * factors[i];
    };

    let theoreticalValidator = 11 - (accumulated % 11);

    if ( theoreticalValidator === 11 ) {
        theoreticalValidator = 0;
    } else if ( theoreticalValidator === 10 ) {
        theoreticalValidator = 9;
    };

    const verifierDigit = parseInt(cuil[10], 10);

    return verifierDigit === theoreticalValidator;
};