interface Feature {
  value: string;
  title: string;
}

interface Slide {
  title: string;
  text: string;
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: {
    height: number;
    width: number;
  };
  price: number;
  proPrice?: number;
  features: Feature[];
  slides: Slide[];
}

const products: Product[] = [
  {
    id: 'bot1',
    title: 'Trade Volume Bot',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes in currencies and info on the buyers making those trends.',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: 249,
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
    slides: [
      {
        title: 'Bot 1 slide 1',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        title: 'Bot 1 slide 2',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        title: 'Bot 1 slide 3',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        title: 'Bot 1 slide 4',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        title: 'Bot 1 slide 5',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
    ],
  },
  {
    id: 'bot2',
    title: 'Wallet Analyzer',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: 99,
    proPrice: 249,
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
    slides: [
      {
        title: 'Bot 2 slide 1',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        title: 'Bot 2 slide 2',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        title: 'Bot 2 slide 3',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
    ],
  },
  {
    id: 'bot3',
    title: 'Profit Maker',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: 499,
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
    slides: [
      {
        title: 'Bot 1 slide 1',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
    ],
  },
  {
    id: 'bot4',
    title: 'Whales Allert',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    href: '#',
    icon: {
      height: 24,
      width: 40,
    },
    price: 0,
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
    slides: [
      {
        title: 'Bot 1 slide 1',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
    ],
  },
  {
    id: 'bot5',
    title: 'Easy Trade Bot',
    subtitle: 'A unique set of tools that provides a detailed analysis of the volume changes',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: 0,
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
    slides: [
      {
        title: 'Bot 1 slide 1',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
    ],
  },
];

export default products;
export type {
  Product,
  Feature,
  Slide,
};
