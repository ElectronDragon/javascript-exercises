const sumAll = function(num1, num2) {
    let smallerNumber
    let largerNumber
    let intervalSum
    

    if (num1 < 1 || num2 < 1 || typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    } else {
        if (num1 > num2) {
            largerNumber = num1;
            smallerNumber = num2;
        } else {
            largerNumber = num2;
            smallerNumber = num1;
        }

        intervalSum = (largerNumber-smallerNumber+1)*(largerNumber+smallerNumber)/2;

        return intervalSum;
    }
};

sumAll(1,4);

// Gaussian distribution = (n/2)(first num + last num) where n is the number of intergers

// alt 1 to n = n*(n+1)/2

// Do not edit below this line
module.exports = sumAll;
