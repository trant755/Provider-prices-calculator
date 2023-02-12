export function findCheckedInputValue(inputArr) {
  let value = "";
  inputArr.forEach((input) => {
    if (input.checked) {
      value = input.value;
    }
  });
  return value;
}
