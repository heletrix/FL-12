function convert() {
    let arr = [];
    for (let i=0; i<arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arr.push(Number(arguments[i]));
        } else if (typeof arguments[i] === 'number') {
            arr.push(String(arguments[i]));
        }
    }
    return arr;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
       func(arr[i]);
   }   
}

function mapArray(arr, func) {
    let arrNumber = [];
    for (let i=0; i<arr.length; i++) {
        arrNumber.push(func(Number(arr[i])));
    }
    return arrNumber;
}

function filterArray(arr, func) {
    let arrFiltered = [];
    executeforEach(arr, function(el){
        if(func(el)) {
            arrFiltered.push(el);
        }
    })
    return arrFiltered;
}

function flipOver(argString) {
    let reversedString = '';
    for (let i=argString.length-1; i>=0; i--) {
        reversedString += argString[i];
    }
    return reversedString;
}

function makeListFromRange(range) {
    let arr = [];
    for (let i=range[0]; i<=range[1]; i++) {
        arr.push(i);
    }
    return arr;
}

function getArrayOfKeys(arr, key) {
    let keyArr = [];
    executeforEach(arr, function(el){
        keyArr.push(el[key]);
    });
    return keyArr;
}

function substitute(arr) {
    let substitutedArr = [];
    let starLimit = 30;
    mapArray(arr, function(el){
        if (el < starLimit) {
            substitutedArr.push('*');
        } else {
            substitutedArr.push(el);
        }
    })
    return substitutedArr;
}

function getPastDay(dateInput, daysNumber) {
    let date = new Date(dateInput);
    date.setDate(dateInput.getDate() - daysNumber)
    return date.getDate();
}

function formatDate(date) {
    let hours = String(date.getHours()).length === 1 ? '0'+date.getHours() : date.getHours();
    let minutes = String(date.getMinutes()).length === 1 ? '0'+date.getMinutes() : date.getMinutes();
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${hours}:${minutes}`;
}
