const removeFromArray = function(arr, ...item){
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(!item.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
