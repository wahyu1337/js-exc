const removeFromArray = function(arr, item){
    let removedItem = [];

    for (let i = 0; i < arr.length; i++){
        if (!removedItem.includes(item)){
            removedItem.push(arr[i])
        }
    } return removedItem;
};
