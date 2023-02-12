import prices from "../prices.js";
import { Providers } from "../providers.js";

const backblaze = new Providers("backblaze");

const { minPayment } = prices.backblaze;

export const calcBackblazePrice = () => {
  let finalPrice = backblaze.finalPrice();

  if (finalPrice < minPayment && finalPrice > 0.01) finalPrice = minPayment;

  return finalPrice;
};
