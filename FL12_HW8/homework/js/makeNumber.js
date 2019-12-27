function makeNumber(symbols) {
    let numberString = '';
    for (let i = 0; i < symbols.length; i++) {
        if (!isNaN(Number(symbols[i])) && symbols[i] !== ' ') {
            numberString += symbols[i];
        }
    }
    return numberString;
}

console.log(makeNumber('123nnwd234.sdjh400056mkgfd78 fd9'));