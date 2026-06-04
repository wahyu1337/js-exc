const totalIntegers = function(targetValue) {
    let count = 0;
    
    // guard case
    if (typeof targetValue !== "object" || targetValue === null){
        return undefined;
    };

    // recursive proses
    Object.values(targetValue).forEach(val => {
        // case if its hit an integer
        if (Number.isInteger(val)) {
            count++;
        } else if (typeof val === "object" && val !== null) {
            // case if it's value is an object and not a null
            count += totalIntegers(val);
        }
    })
};
  
// Do not edit below this line
module.exports = totalIntegers;
