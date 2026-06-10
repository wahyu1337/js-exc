const permutations = function(arr) {
    const result = [];
    let curElement = [];

    // base case if 0
    if (arr.length === 0){
        return [[]];
    }

    // loop each array
    for (let i = 0; i < arr.length; i++) {
        // current element
        curElement.push(arr[i])
        // give remaining element into var
        const remainingElement = curElement.toSpliced(i, 1);

        // sub of remaining element
        result.push(remainingElement);
    }

    return result;
};
  
// Do not edit below this line
module.exports = permutations;
