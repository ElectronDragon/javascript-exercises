const removeFromArray = function(array) {
    let newArray = [];    
    let excludeArray = [...arguments];
    // This is necessary to separate array from the exclusions
    excludeArray.shift();
    
    for (let i = 0; i < array.length; i++) {
        if (excludeArray.includes(array[i])) {
        // do nothing
        } else {
        newArray.push(array[i]);
        }
    }

    return newArray;
};

removeFromArray([1,2,3,4], 3, 4);

// const removeFromArray = function(array, exclude) {
    // let newArray = [];
    // let arrayLength = array.length;
    // let argLength = arguments.length;
// 
    // for (let i = 0; i < array.length; i++) {
        // if (array[i] == exclude) {
            do nothing
        // } else {
        // newArray.push(array[i]);
        // }
    // }
// 
    // return argLength;
// };


// Do not edit below this line
module.exports = removeFromArray;
