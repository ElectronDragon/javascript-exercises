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

// This exercise was made harder by not reading all the tests at the outset. I was coding in one direction, but then had to start from scratch at the half-way mark because my code could not accomodate the new tests. Read ahead, next time.


// Do not edit below this line
module.exports = removeFromArray;
