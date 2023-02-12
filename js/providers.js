import { priceCalc } from "./calculator.js";
import prices from "./prices.js";

export class Providers {
  #name;
  constructor(name) {
    this.#name = name;
    this.storagePrice = defaultStorPrice(name);
    this.transferPrice = defaultTransPrice(name);
    this.storageType = "";
    this.transferType = "";
  }

  changeStorageType(type) {
    this.storType = type;
    this.storPrice = prices[this.#name].storagePrice[type].price;
  }

  finalPrice() {
    return priceCalc.calcProviderFinalPrice(this.storPrice, this.transPrice);
  }

  get storPrice() {
    return this.storagePrice;
  }
  set storPrice(newStoragePrice) {
    this.storagePrice = newStoragePrice;
  }
  get transPrice() {
    return this.transferPrice;
  }
  set transPrice(newTransferPrice) {
    this.transferPrice = newTransferPrice;
  }
  get storType() {
    return this.storageType;
  }
  set storType(newStorageType) {
    this.storageType = newStorageType;
  }
  get transType() {
    return this.transferType;
  }
  set transType(newTransferType) {
    this.transferType = newTransferType;
  }
}

function defaultStorPrice(name) {
  let price = Object.values(prices[name].storagePrice)[0];
  if (typeof price === "object") {
    price = price.price;
  }

  return price;
}

function defaultTransPrice(name) {
  let price = Object.values(prices[name].transferPrice)[0];
  if (typeof price === "object") {
    price = price.price;
  }

  return price;
}
