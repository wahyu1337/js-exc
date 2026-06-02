    const contains = function(obj, value) {
        // base case.
        if (obj === value){
            return true;
        }    

        // if the current value NaN (reference)
        if(Number.isNaN(value) && Number.isNaN(obj)) {
            return true;
        }

        // if the current value is not an object or its null., then stop explore.
        if (typeof obj !== "object" || obj === null){
            return false;
        };

        return Object.values(obj).some(nestedValue => contains(nestedValue, value));
    };
    
    // Do not edit below this line
    module.exports = contains;
    