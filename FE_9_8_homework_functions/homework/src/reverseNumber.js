function reverseNum(num) {
    /*eslint no-magic-numbers: ["error", { "ignore": [123456]}]*/
    return num.toString().split('').reverse().join('');
}
  
console.log(reverseNum(123456))
