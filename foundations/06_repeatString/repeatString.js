const repeatString = function(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++){
        newStr += str;
    }
    if (num < 0){
        newStr = 'ERROR';
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
