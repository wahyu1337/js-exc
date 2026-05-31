const contains = function(obj, value) {
    // base case.
    return (Object.values(obj).some(val => {
        if (val === value) return true;
        if (val & typeof val === "object") return contains(val, value);
        return false;
    }));

};
  
// Do not edit below this line
module.exports = contains;
