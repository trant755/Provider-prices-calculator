import prices from "../prices.js";
import { priceCalc } from "../calculator.js";
import { Providers } from "../providers.js";
import { findCheckedInputValue } from "../helpers/findCheckedInputValue.js";

const storOpt = document.getElementsByName("bunnyStorOpt");

const bunny = new Providers("bunny");

const { maxPayment } = prices.bunny;

storOpt.forEach((input) => {
  input.addEventListener("change", (e) => {
    priceCalc.calculate();
  });
});

export const calcBunnyPrice = () => {
  bunny.changeStorageType(findCheckedInputValue(storOpt));

  let finalPrice = bunny.finalPrice();

  if (finalPrice > maxPayment) finalPrice = maxPayment;
  return finalPrice;
};
