/* eslint-disable max-len */

interface Feature {
  regular?: string;
  pro?: string;
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
  features: Feature;
  slides: Slide[];
  messages?: string[];
}

const products: Product[] = [
  {
    id: 'tvb',
    title: `Trade
      Volume Bot`,
    description: 'Leverage the power of AI and Machine Learning with our Trade Volume Bot, featuring a proprietary rating system for tokens and&nbsp;assets. Benefit from our unique classification of transaction participants and&nbsp;stay ahead with real-time data.',
    calcDescription: 'AI and Machine Learning proprietary rating system for tokens and assets.',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: {
      one: {
        regular: 249,
        pro: 399,
      },
      three: {
        regular: 699,
        pro: 1099,
      },
    },
    features: {
      regular: '<p><b>3 user</b> profiles</p>',
      pro: `<ul>
        <li><b>10 user</b> profiles</li>
        <li>export token data for chosen time frame</li>
        <li>whales configurator</li>
      </ul>`,
    },
    slides: [
      {
        title: 'Real-Time Alerts',
        text: 'Stay ahead of the curve with instant notifications about significant market movements. Our Trade Volume Bot ensures you never miss an opportunity, alerting you to hot tokens and trends as they unfold.',
        messageIndex: 0,
      },
      {
        title: 'Market Data',
        text: 'Dive into detailed market analytics with ease. From liquidity snapshots to market cap evaluations, our bot delivers the critical information you need directly to your fingertips.',
        messageIndex: 0,
      },
      {
        title: 'Trader Activity',
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
        text: 'Elevate your trading with PRO Report: Tailored insights, one-click trade execution, and trend analysis. With CSV/XLS exports, make swift, informed decisions to capitalize on market opportunities. Dominate the trading scene — upgrade to PRO for a titan’s advantage.',
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
    id: 'wa',
    title: `Wallet
      Analyzer`,
    description: 'Introducing the most precise and advanced Wallet Analyzer on the market. Access a suite of essential and&nbsp;unique metrics designed to&nbsp;provide a comprehensive analysis of your wallet\'s performance.',
    calcDescription: 'Most precise and advanced Wallet Analyzer on the market.',
    href: '#',
    icon: {
      height: 30,
      width: 30,
    },
    price: {
      one: {
        regular: 299,
        pro: 599,
      },
      three: {
        regular: 829,
        pro: 1659,
      },
    },
    features: {
      regular: '<p><b>30</b> requests per hour</p>',
      pro: `<ul>
        <li><b>unlimited</b> requests</li>
        <li>time frame wallet search report</li>
        <li>trade report and simulation</li>
      </ul>`,
    },
    slides: [
      {
        title: 'Wallet Overview',
        text: 'Unlock a holistic view of wallet performance, including age, balance, and a detailed profit breakdown over key periods. Understand at a glance how wallets stack up over time, from daily changes to monthly trends, to inform your trading decisions with historical performance data.',
        messageIndex: 0,
      },
      {
        title: 'Top Token Insights',
        text: 'Dive into the specifics with our analysis of the top 3 performing tokens over the last 7 days. Gain actionable insights from each token\'s ROI, buy/sell dynamics, and direct links to essential trading resources, setting you up to follow the leads of the most lucrative moves in the market.',
        messageIndex: 0,
      },
      {
        title: 'Trading Dynamics',
        text: 'Unlock trading insights with advanced metrics: unique tokens, transaction trends, and buy sizes. Harness data on GAS costs, holding times, and sniping accuracy for precise strategies. Analyze profitable vs. non-profitable trade distributions to enhance your investment approach.',
        messageIndex: 0,
      },
      {
        title: 'Simulation and Data',
        text: 'Unlock future trading success with Wallet Analyzer PRO. Simulate trading scenarios with historical data to refine strategies with precision. Test and adjust your tactics to navigate market dynamics confidently. Enhance your trading acumen with our cutting-edge simulation tool. Wallet Analyzer PRO transcends traditional analytics by offering bespoke export options that cater to the most discerning traders.',
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
    id: 'pm',
    title: `Profit
      Maker`,
    description: 'Track the most successful traders and&nbsp;gain insights with real-time summaries of their profitable trades. Profit Maker empowers you to mirror the strategies of top performers in&nbsp;the&nbsp;market.',
    calcDescription: 'Track the most successful traders and gain insights with real-time summaries of their profitable trades.',
    href: '#',
    icon: {
      height: 24,
      width: 24,
    },
    price: {
      one: {
        regular: 399,
      },
      three: {
        regular: 1099,
      },
    },
    features: {},
    slides: [
      {
        title: 'Real-Time Alerts',
        text: 'Profit Maker PRO elevates your trading experience with cutting-edge, real-time alerts.',
        messageIndex: 0,
      },
      {
        title: 'Tailored Analysis',
        text: 'Customize your market analysis with advanced filtering options, allowing you to focus on what truly matters to your portfolio.',
        messageIndex: 0,
      },
      {
        title: 'CopyTrade Report',
        text: 'At the heart of Profit Maker PRO is the revolutionary CopyTrade Report feature, a game-changer for traders looking to mirror the market\'s top performers.',
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
];

export default products;
export type {
  Product,
  Feature,
  Slide,
};
