module.exports = function (num) {
  let fibonacciArray = [1, 1];
  let newNumber = 0;
  let result = 0;
  while (newNumber<num){
    newNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
    if (newNumber<=num){
      fibonacciArray.push(newNumber);
    }
  }
  for (let i=0; i<fibonacciArray.length; i++){
    if(fibonacciArray[i]%2 !== 0){
      result += fibonacciArray[i];
    }
  }
  return result;
}