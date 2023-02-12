import { priceCalc } from "./calculator.js";

const storSlider = document.getElementById("storSlider");
const storSliderValue = document.getElementById("storSliderValue");
const transSlider = document.getElementById("transSlider");
const transSliderValue = document.getElementById("transSliderValue");

noUiSlider.create(storSlider, {
  start: 0,
  connect: [true, false],
  range: { min: 0, max: 1000 },
  step: 1,
  pips: {
    mode: "range",
    density: 3,
  },
});

storSlider.noUiSlider.on(
  "update",
  _.throttle(function (values, handle) {
    storSliderValue.value = Number(values[handle]);
    priceCalc.storSizeValue = Number(values[handle]);
    priceCalc.calculate();
  }, 200)
);

storSliderValue.addEventListener("input", (e) => {
  const value = e.target.value;
  const min = Number(storSliderValue.min);
  const max = Number(storSliderValue.max);
  if (value < min || value > max) {
    storSliderValue.style.color = "red";
    return;
  } else {
    storSliderValue.removeAttribute("style");
  }
  priceCalc.storSizeValue = value;
  priceCalc.calculate();
});

noUiSlider.create(transSlider, {
  start: 0,
  connect: [true, false],
  range: { min: 0, max: 1000 },
  step: 1,
  pips: {
    mode: "range",
    density: 3,
  },
});

transSlider.noUiSlider.on(
  "update",
  _.throttle(function (values, handle) {
    transSliderValue.value = Number(values[handle]);
    priceCalc.transSizeValue = Number(values[handle]);
    priceCalc.calculate();
  }, 200)
);

transSliderValue.addEventListener("input", (e) => {
  const value = e.target.value;
  const min = Number(transSliderValue.min);
  const max = Number(transSliderValue.max);
  if (value < min || value > max) {
    transSliderValue.style.color = "red";
    return;
  } else {
    transSliderValue.removeAttribute("style");
  }
  priceCalc.transSizeValue = value;
  priceCalc.calculate();
});
