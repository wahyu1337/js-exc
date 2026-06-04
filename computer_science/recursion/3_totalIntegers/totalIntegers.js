const totalIntegers = function(targetValue) {
    let count = 0;
    
    // guard case
    if (typeof targetValue !== "object" || targetValue === null){
        return undefined;
    };

    // recursive process.
    Object.values(targetValue).forEach(val => {
        if (Number.isInteger(val)) {
            count++;
        } else if (typeof val === "object" && val !== null) {
            count += totalIntegers(val);
        } 
    });
    return count;    
};

// Do not edit below this line
module.exports = totalIntegers;