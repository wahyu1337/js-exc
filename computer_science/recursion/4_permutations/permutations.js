const permutations = function(targetVal) {
    let arr = [];
    let holder = [];
    // base case
    if (targetVal.length === 0) {
        return [arr];
    }

    // recursive progress
    for (let i = 0; i < targetVal.length; i++) {
        arr.push(targetVal);
    }

    return arr;
};
  
// Do not edit below this line
module.exports = permutations;
