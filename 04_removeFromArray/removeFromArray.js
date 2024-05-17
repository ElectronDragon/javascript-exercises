const removeFromArray = function(array, exclude) {
    let newArray = [9];
    let arrayLength = array.length;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == exclude) {
            // do nothing
        } else {
        newArray.push(array[i]);
        }
    }

    // Need for loop and if statement for removal

    return newArray;
};

removeFromArray([1,2,3], 2);

// Do not edit below this line
module.exports = removeFromArray;
