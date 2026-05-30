const factorial = function(n) {
    // base case recursive
    if (n < 0) {
        return undefined;
    } else if (n <= 1 && n >= 0) {
        // case if the value negative number
        return 1
    } else if (Number.isFinite(n) && !Number.isInteger(n)) {
        // case if the value float number
        return undefined;
    } else if (typeof n !== "number") {
        // case if the value is string
        return undefined;
    }

    // do the recursive.
    return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;