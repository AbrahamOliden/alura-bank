export default function isCuil (input) {
    const cuil = input.value.replace(/[-\/]/g, '');

    console.log(cuil);
};