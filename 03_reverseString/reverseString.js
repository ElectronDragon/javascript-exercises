const reverseString = function(string) {
    let newString = "A"
    let stringLength = string.length;

    for ( let i = 0 ; i < stringLength; i++) {
        newString += string.charAt(i);
    }
    return newString;
};

reverseString("tester");

// Do not edit below this line
module.exports = reverseString;
