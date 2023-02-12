import { changeCheapColor } from "./changeCheapColor.js";

export function pricesChartUpdate(chart, pricesArr) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data = pricesArr;

    const newColors = changeCheapColor(pricesArr, dataset.backgroundColor);

    dataset.backgroundColor = newColors;
  });

  chart.update();
}
