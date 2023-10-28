interface Feature {
  value: string;
  title: string;
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  icon: {
    height: number;
    width: number;
  };
  price: number;
  features: Feature[];
}

const products: Product[] = [
  {
    id: 'bot1',
    title: 'Trade volume bot',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes in currencies and info on the buyers making those trends.',
    icon: {
      height: 24,
      width: 24,
    },
    price: 200,
    features: [
      {
        value: '1000',
        title: 'requests / month',
      },
      {
        value: '100',
        title: 'requests / day',
      },
      {
        value: '1 user',
        title: 'filter profile',
      },
    ],
  },
  {
    id: 'bot2',
    title: 'Bot name 2',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    icon: {
      height: 24,
      width: 24,
    },
    price: 200,
    features: [
      {
        value: '1000',
        title: 'requests / month',
      },
      {
        value: '100',
        title: 'requests / day',
      },
      {
        value: '1 user',
        title: 'filter profile',
      },
    ],
  },
  {
    id: 'bot3',
    title: 'Bot name 3',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    icon: {
      height: 24,
      width: 24,
    },
    price: 200,
    features: [
      {
        value: '1000',
        title: 'requests / month',
      },
      {
        value: '100',
        title: 'requests / day',
      },
      {
        value: '1 user',
        title: 'filter profile',
      },
    ],
  },
  {
    id: 'bot4',
    title: 'Bot name 4',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    icon: {
      height: 24,
      width: 40,
    },
    price: 200,
    features: [
      {
        value: '1000',
        title: 'requests / month',
      },
      {
        value: '100',
        title: 'requests / day',
      },
      {
        value: '1 user',
        title: 'filter profile',
      },
    ],
  },
  {
    id: 'bot5',
    title: 'Bot name 5',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    icon: {
      height: 24,
      width: 24,
    },
    price: 200,
    features: [
      {
        value: '1000',
        title: 'requests / month',
      },
      {
        value: '100',
        title: 'requests / day',
      },
      {
        value: '1 user',
        title: 'filter profile',
      },
    ],
  },
];

export default products;
export type {
  Product,
  Feature,
};
