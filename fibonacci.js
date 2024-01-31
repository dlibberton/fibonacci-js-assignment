
function fibonacci(num) {
  let numOne = 0;
  let numTwo = 1;
  let nTh = 0;
  for (let i = 2; i <= num; i++){
    nTh = numOne + numTwo;
    numOne = numTwo;
    numTwo = nTh;
  }

  return nTh;
}

module.exports = fibonacci;
