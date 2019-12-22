let inputArr = [];
let numberArr = [];
let summArr = 0;
let isExist = true;
let isCorrectInput = true;

inputArr.push(prompt('Please enter a'));
inputArr.push(prompt('Please enter b'));
inputArr.push(prompt('Please enter c'));

for (let i=0; i < inputArr.length; i++) {
    numberArr.push(Number(inputArr[i]));
    summArr += numberArr[i];
}

for (let i=0; i < inputArr.length; i++) {
    if (isNaN(Number(inputArr[i])) || inputArr[i].trim() === '') {
        alert('input values should be ONLY numbers');
        isCorrectInput = false;
        break;
    } else if (Number(inputArr[i]) <= 0){
        alert('A triangle must have 3 sides with a positive definite length');
        isCorrectInput = false;
        break;
    } else if (numberArr[i] >= summArr - numberArr[i]){
        isExist = false;
    }
}

if (isExist && isCorrectInput) {
    if (numberArr[0] === numberArr[1] && numberArr[1] === numberArr[2]) {
        console.log('Equilateral triangle');
    } else if ( numberArr[0] === numberArr[1] || numberArr[1] === numberArr[2] || numberArr[2] === numberArr[0]) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
} else if (!isExist && isCorrectInput) {
    console.log('Triangle doesn’t exist')
}
