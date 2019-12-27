function makeNumber(symbols) {
    let numberString = '';
    for (let i = 0; i < symbols.length; i++) {
        if (!isNaN(Number(symbols[i])) && symbols[i] !== ' ') {
            numberString += symbols[i];
        }
    }
    return numberString;
}

function countNumbers(symbols) {
    let numberString = makeNumber(symbols);
    let countObject = {};
    for (let i = 0; i < numberString.length; i++) {
        if (countObject[numberString[i]]) {
            countObject[numberString[i]] += 1;
        } else {
            countObject[numberString[i]] = 1;
        }
    }

    return countObject;
}

console.log(countNumbers('fhejkgh12348998ttg999'));