export const PLANS = [
  {
    name: 'Free',
    slug: 'free',
    quota: 10,
    pagesPerPdf: 5,
    price: {
      amount: 0,
      priceIds: {
        test: '',
        production: '',
      },
    },
  },
  {
    name: 'Pro',
    slug: 'pro',
    quota: 50,
    pagesPerPdf: 25,
    price: {
      amount: 50000,
      priceIds: {
        test: 'price_1NuEwTA19umTXGu8MeS3hN8L',
        production: '',
      },
    },
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    quota: 50,
    pagesPerPdf: 25,
    price: {
      amount: 'Custom Price',
      priceIds: {
        test: 'price_1NuEwTA19umTXGu8MeS3hN8L',
        production: '',
      },
    },
  },
]
