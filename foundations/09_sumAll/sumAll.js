<<<<<<< HEAD
<<<<<<< HEAD
const sumAll = function(arg1, arg2) {
    let arr = [];
    
    // handle case when not integer
    if (!Number.isInteger(arg1) || !Number.isInteger(arg2)){
        return arr = 'ERROR';
    }

    // Handle case if is negative number
    if (arg1 < 0 || arg2 < 0){
        return arr = 'ERROR';
    }

    // handle case with sum within range
    if (arg1 < arg2){
        for (let i = arg1; i <= arg2; i++){
            arr.push(i);
        }
    } else {
        for (let i = arg2; i <= arg1; i++){
            arr.push(i);
        }
    } return arr.reduce((sum, currentVal) => sum + currentVal);
=======
const sumAll = function() {

>>>>>>> upstream/main
=======
const sumAll = function() {

>>>>>>> upstream/main
};

// Do not edit below this line
module.exports = sumAll;
