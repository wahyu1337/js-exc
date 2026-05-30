const factorial = function(n) {
    // base case recursive
    if (n <= 1) return  1;

    return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;