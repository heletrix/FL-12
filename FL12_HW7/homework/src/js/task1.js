const emailLength = 5;
const passwordLength = 6;
let users = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}
let emailInput = prompt('Please enter your email');

if (emailInput === null || emailInput.trim() === ''){
    alert('Canceled.');
} else if (emailInput.trim().length < emailLength){
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (users[emailInput]) {
    let password = prompt('Please enter your password');
    if (password === null || password.trim() === '') {
        alert('Canceled.');
    } else if (password === users[emailInput]) {
        let isChangesNeded = confirm('Do you want to change your password?');
        if (!isChangesNeded) {
            alert('You have failed the change.');
        } else {
            let oldPassword = prompt('Please enter your old password'); 
            if (oldPassword === null || oldPassword.trim() === '') {
                alert('Canceled.');
            } else if (password === oldPassword) {
                let newPassword1 = prompt('Please enter new password');
                if (newPassword1 === null || newPassword1.trim() === '') {
                    alert('Canceled.');
                } else if (newPassword1.length < passwordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newPassword2 = prompt('Please enter new password again');
                    if (newPassword1 !== newPassword2) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert(`I don’t know you`);
}
