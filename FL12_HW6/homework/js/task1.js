let aInput = prompt('Please enter a');
if (isNaN(Number(aInput)) || Number(aInput) === 0 || aInput.trim() === '') {
    console.log('Invalid input data');
} else {
    let bInput = prompt('Please enter b');
    if (isNaN(Number(bInput)) || bInput.trim() === '' ) {
        console.log('Invalid input data');
    } else {
        let cInput = prompt('Please enter c');
        if (isNaN(Number(cInput)) || cInput.trim() === '' ) {
            console.log('Invalid input data');
        } else {
            let a = Number(aInput);
            let b = Number(bInput);
            let c = Number(cInput);
            const CX = 2;
            const CD = 4;
            let D = b*b - CD*a*c;
            if (D < 0) {
                console.log('no solution');
            } else if (D === 0) {
                let x = Math.round((-b + Math.sqrt(D))/(CX*a));
                console.log('x = ' + x);
            } else {
                let x1 = Math.round((-b + Math.sqrt(D))/(CX*a));
                let x2 = Math.round((-b - Math.sqrt(D))/(CX*a));
                console.log('x1 = ' + x1 + ' and x2 = ' + x2);
            }
        }
    }
}