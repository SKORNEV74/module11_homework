export function countDown (n) {
    let res = '';

    if (Number.isInteger(n)) {
        if ( n < 1 ) {
            return "The entered value isn't positive";
        } else if ( n > 100 ) {
            return "The entered value is very large";
        } else {
            for (let i = n; i > 0; i--) {
                res = res + ' ' + i;
            }
        }
    } else {
        return "The entered value isn't an integer";
    }

    return res;
}