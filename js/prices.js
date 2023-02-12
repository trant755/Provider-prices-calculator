export default {
  backblaze: {
    minPayment: 7,
    storagePrice: { price: 0.005 },
    transferPrice: { price: 0.01 },
  },
  bunny: {
    maxPayment: 10,
    storagePrice: {
      hdd: { price: 0.01 },
      ssd: { price: 0.02 },
    },
    transferPrice: { price: 0.01 },
  },
  scaleway: {
    storagePrice: {
      multi: {
        price: 0.06,
        firstFree: 75,
      },
      single: {
        price: 0.03,
        firstFree: 75,
      },
    },
    transferPrice: {
      price: 0.02,
      firstFree: 75,
    },
  },
  vultr: {
    minPayment: 5,
    storagePrice: { price: 0.01 },
    transferPrice: { price: 0.01 },
  },
};
