/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = Math.abs(x).toString().split('').reverse().join('');

    rev = Number(rev);

    if (x < 0) {
        rev = -rev;
    }

    if (rev < -(2 ** 31) || rev > (2 ** 31) - 1) {
        return 0;
    }

    return rev;
};