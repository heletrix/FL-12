let inputArr = [];
let numberArr = [];
let summArr = 0;
let isExist = true;
let isCorrectInput = true;
const C0 = 0;
const C1 = 1;
const C2 = 2;

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
    if (numberArr[C0] === numberArr[C1] && numberArr[C1] === numberArr[C2]) {
        console.log('Equilateral triangle');
    } else if ( numberArr[C0] === numberArr[C1] || numberArr[C1] === numberArr[C2] || numberArr[C2] === numberArr[C0]) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
} else if (!isExist && isCorrectInput) {
    console.log('Triangle doesn’t exist')
}
