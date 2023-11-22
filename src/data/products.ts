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
  description: string;
  isComingSoon?: boolean;
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
    id: 'trade-volume-bot',
    title: `Trade
      Volume Bot`,
    description: 'Leverage the power of AI and Machine Learning with our Trade Volume Bot, featuring a proprietary rating system for tokens and assets. Benefit from our unique classification of transaction participants and stay ahead with real-time data.',
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
    id: 'wallet-analyzer',
    title: `Wallet
      Analyzer`,
    description: 'Introducing the most precise and advanced Wallet Analyzer on the market. Access a suite of essential and unique metrics designed to provide a comprehensive analysis of your wallet\'s performance.',
    href: '#',
    icon: {
      height: 30,
      width: 30,
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
    id: 'profit-maker',
    title: `Profit
      Maker`,
    description: 'Track the most successful traders and gain insights with real-time summaries of their profitable trades. Profit Maker empowers you to mirror the strategies of top performers in the market.',
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
    id: 'whales-alert',
    title: `Whales
      Alert`,
    description: 'Stay informed with Whale Alert as it monitors the significant fund movements of crypto whales, providing forecasts and tips on how to capitalize on these insights for informed trading decisions.',
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
  {
    id: 'easy-trade',
    title: `ET
      Bot`,
    description: 'COMING SOON',
    isComingSoon: true,
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
];

export default products;
export type {
  Product,
  Feature,
  Slide,
};
