/* exported oddOrEven */
function oddOrEven(numbers) {
  var boolean = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      boolean.push('even');
    } else if (numbers[i] % 2 !== 0) {
      boolean.push('odd');
    }
  }
  return boolean;
}
