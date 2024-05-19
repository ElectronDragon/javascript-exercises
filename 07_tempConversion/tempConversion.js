const convertToCelsius = function(temp) {
  let tempCelsius = (temp-32)*5/9;
  let tempCelsiusRounded = Math.round(tempCelsius*10)/10;
  return tempCelsiusRounded;
};

const convertToFahrenheit = function(temp) {
  let tempFahrenheit = (temp * 9/5) +32;
  let tempFahrenheitRounded = Math.round(tempFahrenheit*10)/10;
  return tempFahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
