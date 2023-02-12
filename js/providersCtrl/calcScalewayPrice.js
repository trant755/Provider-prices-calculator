import prices from "../prices.js";
import { priceCalc } from "../calculator.js";
import { Providers } from "../providers.js";
import { findCheckedInputValue } from "../helpers/findCheckedInputValue.js";

const storOpt = document.getElementsByName("scalewayStorOpt");

const scaleway = new Providers("scaleway");
const { storagePrice, transferPrice } = prices.scaleway;

storOpt.forEach((input) => {
  input.addEventListener("change", (e) => {
    priceCalc.calculate();
  });
});

export const calcScalewayPrice = () => {
  scaleway.changeStorageType(findCheckedInputValue(storOpt));
  const currentStorType = scaleway.storType;
  let storFreeGbPrice = 0;
  let transFreeGbPrice = 0;

  if (storagePrice[currentStorType].firstFree) {
    storFreeGbPrice =
      storagePrice[currentStorType].price *
      storagePrice[currentStorType].firstFree;
  }

  if (transferPrice.firstFree) {
    transFreeGbPrice = transferPrice.firstFree * transferPrice.price;
  }

  let finalPrice = scaleway.finalPrice() - storFreeGbPrice - transFreeGbPrice;
  if (finalPrice < 0) finalPrice = 0;

  return finalPrice;
};
