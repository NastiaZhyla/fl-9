let login = prompt('Enter your login');
let password = '';

if ( login === '' || login === null) {
    alert('Canceled')
} else if (login.length < 4) {
    alert('I don’t know any users having name length less than 4 symbols')
} else if (login === 'User') {
    password = prompt('Enter your password')
} else {
    alert('I don’t know you')
}

if (password === '' || password === null) {
    alert('Canceled')
} else if (password === 'SuperUser') {
    new Date().getHours() < 20 ? alert('Good day!') : alert('Good evening!');
} else {
    alert('Wrong password')
}