myArr = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    },

]
function interestCalculator(arr) {
    var rate;
    var interestData = []
        ;
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i].principal >= 2500) && ((arr[i].time > 1) && (arr[i].time < 3))) {
            rate = 3;

        } else if ((arr[i].principal >= 2500) && (arr[i].time >= 3)) {
            rate = 4;
        } else if ((arr[i].principal < 2500) && (arr[i].time <= 1)) {
            rate = 2;
        } else {
            rate = 1;
        }
        interest = (((arr[i].principal) * rate * (arr[i].time)) / 100);
        obj = {
            principal: arr[i].principal,
            time: arr[i].time,
            rate: rate,
            interest: interest,
        }
        interestData.push(obj);
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(myArr);