let price = parseFloat(prompt('Enter amount of money', '0'));
let discount = parseFloat(prompt('Enter your discount', '0'));

let generalResult = (price, discount, priceWithDiscount, saved) => `
discount: ${+discount.toFixed(2)}%
price with discount: ${+priceWithDiscount.toFixed(2)}
price without discount: ${+price.toFixed(2)}
saved: ${+saved.toFixed(2)}
`;

let result;

if (validateData(price) || validateData(discount) || discount > 100) {
    result = 'Invalid data';
} else {
    let saved = price / 100 * discount;
    let priceWithDiscount = price - saved;
    result = generalResult(price, discount, priceWithDiscount, saved);
}

function validateData(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0;
}
console.log(result);
