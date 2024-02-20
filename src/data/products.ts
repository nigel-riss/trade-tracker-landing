/* eslint-disable max-len */

interface Feature {
  value: string;
  title: string;
}

interface Slide {
  title: string;
  text: string;
  messageIndex: number;
}

interface Product {
  id: string;
  title: string;
  description: string;
  calcDescription: string;
  isComingSoon?: boolean;
  href: string;
  icon: {
    height: number;
    width: number;
  };
  price: {
    [index: string]: {
      regular: number;
      pro?: number;
    },
  }
  features: Feature[];
  slides: Slide[];
  messages?: string[];
}

const products: Product[] = [
  {
    id: 'trade-volume-bot',
    title: `Trade
      Volume Bot`,
    description: 'Leverage the power of AI and Machine Learning with our Trade Volume Bot, featuring a proprietary rating system for tokens and assets. Benefit from our unique classification of transaction participants and stay ahead with real-time data.',
    calcDescription: 'AI and Machine Learning proprietary rating system for tokens and assets.',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: {
      one: {
        regular: 249,
      },
      three: {
        regular: 699,
      },
    },
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
        title: 'Real-Time Alerts',
        text: 'Stay ahead of the curve with instant notifications about significant market movements. Our Trade Volume Bot ensures you never miss an opportunity, alerting you to hot tokens and trends as they unfold.',
        messageIndex: 0,
      },
      {
        title: 'Comprehensive Market Data',
        text: 'Dive into detailed market analytics with ease. From liquidity snapshots to market cap evaluations, our bot delivers the critical information you need directly to your fingertips.',
        messageIndex: 0,
      },
      {
        title: 'Trader Activity Tracking',
        text: 'Gain insight into the behaviors that drive market dynamics. Our bot analyzes buyer and seller patterns, providing a clear picture of the trading landscape.',
        messageIndex: 0,
      },
      {
        title: 'Security Analysis',
        text: 'Trade with confidence by leveraging our bot’s security features. With real-time updates on honeypot status, contract verifications, and liquidity locks, you’re equipped to make trades that align with your risk tolerance.',
        messageIndex: 0,
      },
      {
        title: 'Community Insights',
        text: 'Understand the market’s heartbeat with deep dives into token holder activities. Trade Volume Bot breaks down holder distributions, whale movements, and token allocations, offering you a strategic overview of the community sentiment.',
        messageIndex: 0,
      },
      {
        title: 'PRO Report',
        text: 'Maximize your market edge with PRO Report. Gain the elite advantage with tailored insights and one-click trade execution. Spot trends and anomalies before they hit the mainstream with our advanced comparative analysis and historical data tracking. CSV/XLS Exports: Take control with the ability to export in-depth reports. Make informed decisions quickly, and act fast to seize profitable opportunities that others might miss. Don\'t just watch the market — dominate it. Subscribe to PRO and trade like a titan with Atlantes.io.',
        messageIndex: 0,
      },
    ],
    messages: [
      `Number of alerts: 8 in 28m38s

      Name: MoonPepe (MoonPepe)
      Contract age: 22h48m13s
      CA: 0xF6323287F5EF3518800090d05C
      17a0Ac109A0e04`,
      `Tax: 0.0% | 0.0%
      Honeypot: Sellable ✅
      Liquidity: $20.22k ➡️ $20.36k 🟢
      Buyers - Sellers: 83 (69 uniq) | 35 (34 uniq)
      Buys - Sells: 18.43k | 4.01k 🟢
      Volume: $22.44k
      Mcap - Ath: $78.57k ^ $206.47k`,
      `DETAILS 🔍
      Supply: 10000000000
      Contract verified: true
      Name: MoonPepe (MoonPepe)
      Contract age: 22h48m13s
      Number of alerts: 8 in 28m38s`,
    ],
  },
  {
    id: 'wallet-analyzer',
    title: `Wallet
      Analyzer`,
    description: 'Introducing the most precise and advanced Wallet Analyzer on the market. Access a suite of essential and unique metrics designed to provide a comprehensive analysis of your wallet\'s performance.',
    calcDescription: 'Most precise and advanced Wallet Analyzer on the market.',
    href: '#',
    icon: {
      height: 30,
      width: 30,
    },
    price: {
      one: {
        regular: 99,
        pro: 249,
      },
      three: {
        regular: 249,
        pro: 699,
      },
    },
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
        title: 'Comprehensive Wallet Overview',
        text: 'Unlock a holistic view of wallet performance, including age, balance, and a detailed profit breakdown over key periods. Understand at a glance how wallets stack up over time, from daily changes to monthly trends, to inform your trading decisions with historical performance data.',
        messageIndex: 0,
      },
      {
        title: 'Top Token Insights',
        text: 'Dive into the specifics with our analysis of the top 3 performing tokens over the last 7 days. Gain actionable insights from each token\'s ROI, buy/sell dynamics, and direct links to essential trading resources, setting you up to follow the leads of the most lucrative moves in the market.',
        messageIndex: 0,
      },
      {
        title: 'Trading Dynamics & Precision Analytics',
        text: 'Explore trading behavior with a detailed look at unique tokens, transaction counts, and average buy sizes. Our advanced metrics like average GAS costs, holding times, and sniping accuracy provide you with a comprehensive toolkit to strategize your trades with precision. Plus, gain a clear perspective on the distribution of profitable versus non-profitable trades to refine your investment strategy.',
        messageIndex: 0,
      },
      {
        title: 'Advanced Simulation Capabilities',
        text: 'With Wallet Analyzer PRO, step into the future of trading with our state-of-the-art simulation feature. This powerful tool allows you to model trading scenarios based on extensive historical data, offering a glimpse into potential future outcomes. Test your strategies against past market conditions to refine your approach with unparalleled precision. Whether it\'s assessing the impact of major market movements or fine-tuning entry and exit points, our simulations provide the insights needed to elevate your trading strategy.',
        messageIndex: 0,
      },
      {
        title: 'Custom Data Export Options',
        text: 'Wallet Analyzer PRO transcends traditional analytics by offering bespoke export options that cater to the most discerning traders. Tailor your data analysis by selecting specific time frames or blockchain blocks, with the convenience of exporting this information directly into CSV/XLS formats. This functionality not only enhances your ability to perform deep dives into market dynamics but also equips you with the agility to share insights, compile comprehensive reports, or integrate data with your own trading tools.',
        messageIndex: 0,
      },
    ],
    messages: [
      `Number of alerts: 8 in 28m38s

      Name: MoonPepe (MoonPepe)
      Contract age: 22h48m13s
      CA: 0xF6323287F5EF3518800090d05C
      17a0Ac109A0e04`,
      `DETAILS 🔍
      Supply: 10000000000
      Contract verified: true
      Name: MoonPepe (MoonPepe)
      Contract age: 22h48m13s
      Number of alerts: 8 in 28m38s`,
      `Tax: 0.0% | 0.0%
      Honeypot: Sellable ✅
      Liquidity: $20.22k ➡️ $20.36k 🟢
      Buyers - Sellers: 83 (69 uniq) | 35 (34 uniq)
      Buys - Sells: 18.43k | 4.01k 🟢
      Volume: $22.44k
      Mcap - Ath: $78.57k ^ $206.47k`,
    ],
  },
  {
    id: 'profit-maker',
    title: `Profit
      Maker`,
    description: 'Track the most successful traders and gain insights with real-time summaries of their profitable trades. Profit Maker empowers you to mirror the strategies of top performers in the market.',
    calcDescription: 'Track the most successful traders and gain insights with real-time summaries of their profitable trades.',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: {
      one: {
        regular: 499,
      },
      three: {
        regular: 1399,
      },
    },
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
        title: 'Real-Time Enhanced Alerts',
        text: 'Profit Maker elevates your trading experience with cutting-edge, real-time alerts. Tailored to fit your unique trading style, these alerts ensure you\'re always in the loop on the most promising trade opportunities. Stay ahead with actionable insights that could redefine your trading success.',
        messageIndex: 0,
      },
      {
        title: 'Custom Report Exports - Introducing CopyTrade Report',
        text: 'At the heart of Profit Maker is the revolutionary CopyTrade Report feature, a game-changer for traders looking to mirror the market\'s top performers. This exclusive tool provides an in-depth comparison of your trades against those of leading traders, offering a clear view of where you stand and how you can adjust your strategy for better results. With the ability to export these insights into CSV/XLS formats, the CopyTrade Report not only informs but empowers your trading decisions.',
        messageIndex: 0,
      },
      {
        title: 'Tailored Analysis for Precision Trading',
        text: 'Customize your market analysis with advanced filtering options, allowing you to focus on what truly matters to your portfolio. Profit Maker gives you the keys to a deeper understanding of market trends, enabling you to dissect and analyze trading patterns with precision. Make informed decisions based on a robust analysis tailored specifically to your trading criteria.',
        messageIndex: 0,
      },
    ],
    messages: [
      `Number of alerts: 8 in 28m38s

      Name: MoonPepe (MoonPepe)
      Contract age: 22h48m13s
      CA: 0xF6323287F5EF3518800090d05C
      17a0Ac109A0e04`,
      `Tax: 0.0% | 0.0%
      Honeypot: Sellable ✅
      Liquidity: $20.22k ➡️ $20.36k 🟢
      Buyers - Sellers: 83 (69 uniq) | 35 (34 uniq)
      Buys - Sells: 18.43k | 4.01k 🟢
      Volume: $22.44k
      Mcap - Ath: $78.57k ^ $206.47k`,
    ],
  },
  // {
  //   id: 'whales-alert',
  //   title: `Whales
  //     Alert`,
  //   description: 'Stay informed with Whale Alert as it monitors the significant fund movements of crypto whales, providing forecasts and tips on how to capitalize on these insights for informed trading decisions.',
  //   calcDescription: 'Stay informed with Whale Alert as it monitors the significant fund movements of crypto whales.',
  //   href: '#',
  //   icon: {
  //     height: 24,
  //     width: 24,
  //   },
  //   price: {
  //     one: {
  //       regular: 0,
  //     },
  //     three: {
  //       regular: 0,
  //     },
  //   },
  //   features: [
  //     {
  //       value: '1000',
  //       title: 'requests / month',
  //     },
  //     {
  //       value: '100',
  //       title: 'requests / day',
  //     },
  //     {
  //       value: '1 user',
  //       title: 'filter profile',
  //     },
  //   ],
  //   slides: [
  //     {
  //       title: 'Bot 4 slide 1',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //     {
  //       title: 'Bot 4 slide 2',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //     {
  //       title: 'Bot 4 slide 3',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //     {
  //       title: 'Bot 4 slide 4',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //     {
  //       title: 'Bot 4 slide 5',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //   ],
  //   messages: [
  //     `Number of alerts: 8 in 28m38s

  //     Name: MoonPepe (MoonPepe)
  //     Contract age: 22h48m13s
  //     CA: 0xF6323287F5EF3518800090d05C
  //     17a0Ac109A0e04`,
  //     `Tax: 0.0% | 0.0%
  //     Honeypot: Sellable ✅
  //     Liquidity: $20.22k ➡️ $20.36k 🟢
  //     Buyers - Sellers: 83 (69 uniq) | 35 (34 uniq)
  //     Buys - Sells: 18.43k | 4.01k 🟢
  //     Volume: $22.44k
  //     Mcap - Ath: $78.57k ^ $206.47k`,
  //     `DETAILS 🔍
  //     Supply: 10000000000
  //     Contract verified: true
  //     Name: MoonPepe (MoonPepe)
  //     Contract age: 22h48m13s
  //     Number of alerts: 8 in 28m38s`,
  //   ],
  // },
  // {
  //   id: 'easy-trade',
  //   title: `ET
  //     Bot`,
  //   description: 'COMING SOON',
  //   calcDescription: 'COMING SOON',
  //   isComingSoon: true,
  //   href: '#',
  //   icon: {
  //     height: 24,
  //     width: 40,
  //   },
  //   price: {
  //     one: {
  //       regular: 249,
  //     },
  //     three: {
  //       regular: 699,
  //     },
  //   },
  //   features: [
  //     {
  //       value: '1000',
  //       title: 'requests / month',
  //     },
  //     {
  //       value: '100',
  //       title: 'requests / day',
  //     },
  //     {
  //       value: '1 user',
  //       title: 'filter profile',
  //     },
  //   ],
  //   slides: [
  //     {
  //       title: 'Bot 5 slide 1',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //     {
  //       title: 'Bot 5 slide 2',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //     {
  //       title: 'Bot 5 slide 3',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //     {
  //       title: 'Bot 5 slide 4',
  //       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  //       messageIndex: 0,
  //     },
  //   ],
  //   messages: [
  //     `Number of alerts: 8 in 28m38s

  //     Name: MoonPepe (MoonPepe)
  //     Contract age: 22h48m13s
  //     CA: 0xF6323287F5EF3518800090d05C
  //     17a0Ac109A0e04`,
  //     `Tax: 0.0% | 0.0%
  //     Honeypot: Sellable ✅
  //     Liquidity: $20.22k ➡️ $20.36k 🟢
  //     Buyers - Sellers: 83 (69 uniq) | 35 (34 uniq)
  //     Buys - Sells: 18.43k | 4.01k 🟢
  //     Volume: $22.44k
  //     Mcap - Ath: $78.57k ^ $206.47k`,
  //     `DETAILS 🔍
  //     Supply: 10000000000
  //     Contract verified: true
  //     Name: MoonPepe (MoonPepe)
  //     Contract age: 22h48m13s
  //     Number of alerts: 8 in 28m38s`,
  //   ],
  // },
];

export default products;
export type {
  Product,
  Feature,
  Slide,
};
