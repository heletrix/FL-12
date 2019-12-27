function isLeapYear(date) {
    if (!isNaN(new Date(date))) {
        let year = (new Date(date)).getFullYear();
        if (new Date(year, 1, 29).getDate() === 29) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    } else {
        console.log('Invalid Date');
    }
}

isLeapYear('2012-01-01T00:00:00');