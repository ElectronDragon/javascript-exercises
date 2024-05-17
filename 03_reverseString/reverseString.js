const reverseString = function(string) {
    let newString = ""
    let stringLength = string.length;

    for ( let i = stringLength-1 ; i >= 0; i--) {
        newString += string.charAt(i);
    }
    return newString;
};

// Note to self: my initial difficulties arose from trying to make stringLength negative and working with i starting at -1 and working (down) towards stringLength. The code does NOT like this. Instead, stay positive, and work from stringLength -1 down to zero.

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
