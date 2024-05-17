const reverseString = function(string) {
    let newString = ""
    let stringLength = string.length;

    for ( let i = stringLength-1 ; i >= 0; i--) {
        newString += string.charAt(i);
    }
    return newString;
};

reverseString();

// Do not edit below this line
module.exports = reverseString;
