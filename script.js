function isArithmeticProgression (numbers) 
{
  var dif1 = (numbers[1]) - (numbers[0])
  for (var i = 0 ; i < numbers.length - 1 ; i++)
  {
    var dif2 = numbers [i+1] - numbers [i]
    if (dif1 != dif2) {
      return false }
    }
    return true
  }
// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false