function isPrime(number) {
  if (number < 2){
      return false;
  } 
/*eslint no-magic-numbers: ["error", { "ignore": [0, 2, 5]}]*/   
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
  }
  
  return true;
  }
}
console.log(isPrime(5));
