let numOne = 0;
let numTwo = 1;
let nTh;

function fibonacci(num) {
  for (let i = 2; i <= num; i++){
    nTh = numOne + numTwo;
    numOne = numTwo;
    numTwo = nTh;
  }

  return nTh;
}

module.exports = fibonacci;
