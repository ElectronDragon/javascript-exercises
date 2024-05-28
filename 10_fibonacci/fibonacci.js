const fibonacci = function(rawNum) {
    if (rawNum < 0) {
        return "OOPS"
    } else {
    let num = parseInt(rawNum);
    let squareFive = Math.sqrt(5);
    let fibNum = Math.round((((1+squareFive)**num)-((1-squareFive)**num))/((2**num)*squareFive));

    return fibNum;
    }
};

// My solution was very different simply because I just ed used the fibonacci formula rather than creating a loop.

// Do not edit below this line
module.exports = fibonacci;
