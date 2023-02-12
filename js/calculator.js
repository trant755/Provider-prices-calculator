import ctrl from "./providersCtrl/index.js";
import { pricesChart } from "./chart.js";
import { pricesChartUpdate } from "./helpers/pricesChartUpdate.js";

class Calculator {
  #pricesArr;
  constructor() {
    this.storSize = 0;
    this.transSize = 0;
    this.#pricesArr = [];
  }

  calculate() {
    const backblazePrice = ctrl.calcBackblazePrice().toFixed(2);
    const bunnyPrice = ctrl.calcBunnyPrice().toFixed(2);
    const scalewayPrice = ctrl.calcScalewayPrice().toFixed(2);
    const vultrPrice = ctrl.calcVultrPrice().toFixed(2);

    this.#pricesArr = [
      Number(backblazePrice),
      Number(bunnyPrice),
      Number(scalewayPrice),
      Number(vultrPrice),
    ];

    pricesChartUpdate(pricesChart, this.#pricesArr);
  }

  calcProviderFinalPrice(storPrice, transPrice) {
    const result = this.storSize * storPrice + this.transSize * transPrice;
    return result;
  }

  get pricesArr() {
    return this.#pricesArr;
  }

  get storSizeValue() {
    return this.storSize;
  }
  set storSizeValue(newStorSize) {
    this.storSize = newStorSize;
  }
  get transSizeValue() {
    return this.storSize;
  }
  set transSizeValue(newTransSize) {
    this.transSize = newTransSize;
  }
}

export const priceCalc = new Calculator();
priceCalc.calculate();
