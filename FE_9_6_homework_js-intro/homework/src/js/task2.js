let A = parseFloat(prompt('Enter the length of side A', '0'));
let B = parseFloat(prompt('Enter the length of side B', '0'));
let angle = parseFloat(prompt('Enter angle', '0'));

const angleSum = 180;

let generalResult = (C, square, perimeter) => `
the length of side C: ${+C.toFixed(2)}
triangle square: ${+square.toFixed(2)}
triangle perimeter: ${+perimeter.toFixed(2)}
`;

let result;

if (validateData(A) || validateData(B) || validateData(angle) || angle > angleSum) {
    result = 'Invalid data';
} else {
    let C = getC(A, B, angle);
    let square = getSquare(perimeter/2, A, B, C);
    let perimeter = A + B + C;
    result = generalResult(C, square, perimeter);
}
function validateData(number) {
return isNaN(number) || typeof number !== 'number' || number < 0;
}
function getC(A, B, angle) {    
    const gamma = Math.PI / angleSum * angle;
    return Math.sqrt(A*A + B*B - 2 * A * B * Math.cos(gamma));
}

function getSquare(perimeter, A, B, C) {
    return Math.sqrt(perimeter * ((perimeter - A) * (perimeter - B) * (perimeter - C)));
}

console.log(result);