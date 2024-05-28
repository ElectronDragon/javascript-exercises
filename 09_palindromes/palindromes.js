const palindromes = function (rawString) {

    let pureString = rawString
        .replace(/[^a-zA-Z0-9]/g,"")
        .toLowerCase();

    // let splitString = pureString.split("");
    // console.log(splitString);
    // let reverseSplitString = splitString.reverse();
    // console.log(reverseSplitString);
    // let reverseString = reverseSplitString.join("");
    // console.log(reverseString);

    // All of the above can be replaced by:
    let reverseString = pureString
        .split("")
        .reverse()
        .join("");

    if (pureString == reverseString) {
        return true;
    } else {
        return false;
    }
};

// We compare strings because it is much easier to do so than to compare arrays, which are objects and therefore not equal. You instead need to compare each element.

// While my code is slowly getting cleaner and more condensed, I'm still doing more than is required. Something to work on. I also used .relpace rather than .filter.

// Do not edit below this line
module.exports = palindromes;
