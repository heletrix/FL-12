let a_input = prompt('Please enter a');
if (isNaN(Number(a_input)) || Number(a_input) === 0 || a_input.trim() === '') {
    console.log('Invalid input data');
} else {
    let b_input = prompt('Please enter b');
    if (isNaN(Number(b_input)) || b_input.trim() === '' ) {
        console.log('Invalid input data');
    } else {
        let c_input = prompt('Please enter c');
        if (isNaN(Number(c_input)) || c_input.trim() === '' ) {
            console.log('Invalid input data');
        } else {
            let a = Number(a_input);
            let b = Number(b_input);
            let c = Number(c_input);
            let cx = 2;
            let cD = 4;
            let D = b*b - cD*a*c;
            if (D < 0) {
                console.log('no solution');
            } else if (D === 0) {
                let x = Math.round((-b + Math.sqrt(D))/(cx*a));
                console.log('x = ' + x);
            } else {
                let x1 = Math.round((-b + Math.sqrt(D))/(cx*a));
                let x2 = Math.round((-b - Math.sqrt(D))/(cx*a));
                console.log('x1 = ' + x1 + ' and x2 = ' + x2);
            }
        }
    }
}