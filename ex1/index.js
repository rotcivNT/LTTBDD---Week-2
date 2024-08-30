// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."

const printForecast = (tempArr) => {
    let forecastString = "...";

    tempArr.forEach((item, index) => {
        forecastString += `${item} oC in ${index + 1} days ...`
    })

    console.log(forecastString);
    
} 

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

printForecast(data1)

console.log("--------------------------------");

printForecast(data2)