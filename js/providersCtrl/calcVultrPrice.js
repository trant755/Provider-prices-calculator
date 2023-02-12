import prices from "../prices.js";
import { Providers } from "../providers.js";

const vultr = new Providers("vultr");
const { minPayment } = prices.vultr;

export const calcVultrPrice = () => {
  let finalPrice = vultr.finalPrice();

  if (finalPrice < minPayment && finalPrice > 0.01) finalPrice = minPayment;

  return finalPrice;
};
