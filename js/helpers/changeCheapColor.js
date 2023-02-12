export function changeCheapColor(pricesArr, colorArr) {
  const idx = pricesArr.findIndex(
    (value, _, arr) => value === Math.min(...arr)
  );

  const newColors = colorArr.map((color, i) => {
    if (i === idx) {
      return (color = "red");
    } else {
      return (color = "grey");
    }
  });
  return newColors;
}
