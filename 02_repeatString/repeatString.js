const repeatString = function(string, num) {
    let message = "";
    if (num <0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            message += string;
        }
        return message;
    }
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;