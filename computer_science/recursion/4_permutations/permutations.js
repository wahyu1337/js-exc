const permutations = function(arr) {
    const result = [];

    // guard case if no element
    if (arr.length === 0) {
        return [[]];
    }

    function permute(currentArr, memo = []) {
        // base case if no element to process
        if (currentArr.length === 0) {
            result.push(memo);
            return;
        }

        for (let i = 0; i < currentArr.length; i++) {
            // remove element at index i without mutating the array
            const reamining = currentArr.toSpliced(i, 1);

            // Add the selected element to our building permutation path
            const nextMemo = memo.concat(currentArr[i]);

            // recursive
            permute(reamining, nextMemo);
        }
    }
    permute(arr);
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
