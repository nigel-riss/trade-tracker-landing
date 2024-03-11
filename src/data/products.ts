/* eslint-disable max-len */

interface Feature {
  regular?: string;
  pro?: string;
}

interface Message {
  text: string;
  offset?: number;
}

interface TGDoc {
  fileName: string;
  fileSizeKB: number;
  time: string;
}

interface DocsMessage {
  docs: TGDoc[];
  offset?: number;
}

interface Slide {
  title: string;
  text: string;
  message: Message | DocsMessage;
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
      regular: `<ul>
        <li><b>3 user</b> profiles</li>
        <li><s>export token data for chosen time frame</s></li>
        <li><s>whales configurator</s></li>
      </ul>`,
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
        message: {
          text: `
**$PEPEFORK** | __Veryfied__
${'`'}-------------------------------${'`'}
🚨 **New Alert:** ${'`'}1 in the last 2m31s${'`'}
${'`'}-------------------------------${'`'}
🔍 **Token Overview:**
AI Rate: ${'`'}5%${'`'}
CA: ${'`'}0xb3705fc53e15e71ac35bbd862b7f9b0bb69c39be${'`'}
CA Age: ${'`'}26h 31m${'`'} | Pair: ${'`'}24h 98m${'`'}
${'`'}Contact${'`'} | ${'`'}Owner${'`'}
          `,
          offset: 0,
        },
      },
      {
        title: 'Market Data',
        text: 'Dive into detailed market analytics with ease. From liquidity snapshots to market cap evaluations, our bot delivers the critical information you need directly to your fingertips.',
        message: {
          text: `
📊 **Market Data:**
Liquidity: ${'`'}$20.22k${'`'}
MCap: ${'`'}$269k${'`'} | ATH: ${'`'}$119k${'`'}
Volume: ${'`'}$32.74k${'`'}
Tax: Buy ${'`'}5%${'`'} / Sell ${'`'}8%${'`'}
          `,
          offset: -10,
        },
      },
      {
        title: 'Trader Activity',
        text: 'Gain insight into the behaviors that drive market dynamics. Our bot analyzes buyer and seller patterns, providing a clear picture of the trading landscape.',
        message: {
          text: `
👥 **Trading Activity:**
Buyers: ${'`'}89${'`'} (54 unique)
Sellers: ${'`'}78${'`'} (65 unique)
Buys: ${'`'}22.34k${'`'}| Sells: ${'`'}10.4k${'`'}
${'`'}Dextools${'`'} | ${'`'}Dexscreener${'`'}
          `,
          offset: -15,
        },
      },
      {
        title: 'Security Analysis',
        text: 'Trade with confidence by leveraging our bot’s security features. With real-time updates on honeypot status, contract verifications, and liquidity locks, you’re equipped to make trades that align with your risk tolerance.',
        message: {
          text: `
🔏 **Token Security:**
Honeypot Status: ${'`'}Yes/No${'`'}
Verified: ${'`'}Yes/No${'`'} | Liquidity Locked: ${'`'}80%${'`'}
Owner: ${'`'}Renounced${'`'} | KYC: ${'`'}Binance / N/A${'`'}
Owner's Balance: ${'`'}$565k${'`'}
${'`'}Honeypot${'`'} | ${'`'}TokenSniffer${'`'}
          `,
          offset: -20,
        },
      },
      {
        title: 'Community Insights',
        text: 'Understand the market’s heartbeat with deep dives into token holder activities. Trade Volume Bot breaks down holder distributions, whale movements, and token allocations, offering you a strategic overview of the community sentiment.',
        message: {
          text: `
📈 **Community & Wallets:**
**Holders:** ${'`'}350${'`'} 
  └ 30.0% | 5.5% | 1.8% | 1.8% |
- **Presale:** ${'`'}10${'`'} (40% sold, 60% hold)
  └ % of total supply: ${'`'}20%${'`'}
- **Snipers:** ${'`'}56${'`'} (40% sold, 60% hold)
  └ % of total supply: ${'`'}20%${'`'}
- **1st 100 HLD:** ${'`'}89${'`'} (40% sold, 60% hold)
  └ % of total supply: ${'`'}20%${'`'}
- **Whales:** ${'`'}10${'`'}
  └ % of total supply: ${'`'}20%${'`'}
- **Fresh:** ${'`'}34${'`'}
  └ % of total supply: ${'`'}20%${'`'}
- **Transfer**: ${'`'}58${'`'}
  └ % of total supply: ${'`'}20%${'`'}
- **Smart Wallets:** ${'`'}56${'`'} 
- **MEV Bots:** ${'`'}7${'`'} 
- **Inactive Wallets:** ${'`'}67${'`'}
- **Dormant Wallets:** ${'`'}56${'`'}
${'`'}Maestro(PRO)${'`'} | ${'`'}Banana${'`'} | ${'`'}Unibot${'`'}
          `,
          offset: -25,
        },
      },
      {
        title: 'PRO Report',
        text: 'Elevate your trading with PRO Report: Tailored insights, one-click trade execution, and trend analysis. With CSV/XLS exports, make swift, informed decisions to capitalize on market opportunities. Dominate the trading scene — upgrade to PRO for a titan’s advantage.',
        message: {
          docs: [
            {
              fileName: 'Pro Report.csv',
              fileSizeKB: 170.3,
              time: '14:55',
            },
            {
              fileName: 'Pro Report.xlsx',
              fileSizeKB: 9.5,
              time: '14:55',
            },
          ],
          offset: -32,
        },
      },
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
      regular: `<ul>
        <li><b>30</b> requests per hour</li>
        <li><s>time frame wallet search report</s></li>
        <li><s>trade report and simulation</s></li>
      </ul>`,
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
        message: {
          text: `
${'`'}0x8b9de9f8ac145af0a007d9d3c47817c6885d88c5${'`'}
${'`'}etherscan${'`'} | ${'`'}debank${'`'}

📊 **CopyTrade Score:** 🔴

🔐 **KYC Status:** ${'`'}Yes${'`'}
**Wallet Age:** ${'`'}365 days${'`'}
**Wallet Balance:** ${'`'}$56k${'`'} 
**Profit by Period:** 
**1D:** ↓ ${'`'}-3 ETH${'`'} | ${'`'}$56k${'`'}
**7D:** ↑ ${'`'}1.2 ETH${'`'} | ${'`'}$56k${'`'}
**14D:** ↑ ${'`'}5.78 ETH${'`'} | ${'`'}$56k${'`'}
**30D:** ↑ ${'`'}1.2 ETH${'`'} | ${'`'}$56k${'`'}

🔍 **Analysis Period:** ${'`'}7 days${'`'}
**Profit Overview:** ${'`'}1.2 ETH${'`'} | ${'`'}$56k${'`'}
**ROI:** ${'`'}1987%${'`'}
**Avg. Trade Freq.:** ${'`'}2.16${'`'}
          `,
          offset: 0,
        },
      },
      {
        title: 'Top Token Insights',
        text: 'Dive into the specifics with our analysis of the top 3 performing tokens over the last 7 days. Gain actionable insights from each token\'s ROI, buy/sell dynamics, and direct links to essential trading resources, setting you up to follow the leads of the most lucrative moves in the market.',
        message: {
          text: `
🔖 **Top Perfomance:** ${'`'}7 days${'`'}

**$Shiba:** ${'`'}ROI 2467%${'`'}
🏆 **Profit:** ${'`'}1.2 ETH${'`'} | ${'`'}$56k${'`'} 
🔼 **Buy:** ${'`'}0.1 ETH${'`'} / 🔽 **Sell:** ${'`'}1.25 ETH${'`'}
${'`'}TVB${'`'} | ${'`'}Dextools${'`'} | ${'`'}Etherscan${'`'}

**$Shiba:** ${'`'}ROI 2467%${'`'}
🏆 **Profit:** ${'`'}1.2 ETH${'`'} | ${'`'}$56k${'`'} 
🔼 **Buy:** ${'`'}0.1 ETH${'`'} / 🔽 **Sell:** ${'`'}1.25 ETH${'`'}
${'`'}TVB${'`'} | ${'`'}Dextools${'`'} | ${'`'}Etherscan${'`'}

**$Shiba:** ${'`'}ROI 2467%${'`'}
🏆 **Profit:** ${'`'}1.2 ETH${'`'} | ${'`'}$56k${'`'} 
🔼 **Buy:** ${'`'}0.1 ETH${'`'} / 🔽 **Sell:** ${'`'}1.25 ETH${'`'}
${'`'}TVB${'`'} | ${'`'}Dextools${'`'} | ${'`'}Etherscan${'`'}
          `,
          offset: -18,
        },
      },
      {
        title: 'Trading Dynamics',
        text: 'Unlock trading insights with advanced metrics: unique tokens, transaction trends, and buy sizes. Harness data on GAS costs, holding times, and sniping accuracy for precise strategies. Analyze profitable vs. non-profitable trade distributions to enhance your investment approach.',
        message: {
          text: `
**Uniq. Tokens Count:** ${'`'}12${'`'}
**Buys:** ${'`'}56${'`'}
**Sells:** ${'`'}53${'`'}
**Avg. Buy:** ${'`'}0.1 ETH${'`'}
**Avg. GAS Cost:** ${'`'}$10.12${'`'}
**Avg. Holding Time:** ${'`'}94 min${'`'}
**Transfer % (Token):** ${'`'}7%${'`'}
🎯 **Sniping:** ${'`'}23%${'`'}

📈 **ROI Positive Trades %:**
**0-30:** ${'`'}12%${'`'}
**30-100:** ${'`'}26%${'`'}
**100-500:** ${'`'}75%${'`'}
**500:** ${'`'}10%${'`'}

💔 **ROI Negative Trades**
**0-30:** ${'`'}24%${'`'}
**30-50:** ${'`'}10%${'`'}
**50-100:** ${'`'}2%${'`'}
          `,
          offset: -33,
        },
      },
      {
        title: 'Simulation and Data',
        text: 'Unlock future trading success with Wallet Analyzer PRO. Simulate trading scenarios with historical data to refine strategies with precision. Test and adjust your tactics to navigate market dynamics confidently. Enhance your trading acumen with our cutting-edge simulation tool. Wallet Analyzer PRO transcends traditional analytics by offering bespoke export options that cater to the most discerning traders.',
        message: {
          docs: [
            {
              fileName: 'Simulation and Data.csv',
              fileSizeKB: 170.3,
              time: '16:22',
            },
            {
              fileName: 'Simulation and Data.xlsx',
              fileSizeKB: 11.7,
              time: '16:22',
            },
          ],
          offset: -33,
        },
      },
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
        message: {
          text: `
**🚀 TOP PROFIT 🚀**

🔐 **Wallet:** ${'`'}0x8b9de9f8ac145af0a007d9d3c47817c6885d88c5${'`'}
${'`'}etherscan${'`'} | ${'`'}debank${'`'} | ${'`'}WA${'`'} 

📊 **Token:** ${'`'}$Shiba${'`'}
${'`'}etherscan${'`'} | ${'`'}dextools${'`'} | ${'`'}TVB${'`'}

💰 **Buy Amount:** ${'`'}0.01 ETH${'`'}
💵 **Sell Amount:** ${'`'}0.45 ETH${'`'}
📈 **ROI:** ${'`'}1678%${'`'}
🏆 **Profit:** ${'`'}0.44 ETH${'`'}
🔄 **Total Trades:** ${'`'}5${'`'}
          `,
          offset: 0,
        },
      },
      {
        title: 'Tailored Analysis',
        text: 'Customize your market analysis with advanced filtering options, allowing you to focus on what truly matters to your portfolio.',
        message: {
          text: `
__Report by Filters__

**🚀 Position Opened**

Trade Date (UTC): ${'`'}2024-01-24 15:00:00${'`'}

🔐 Wallet: ${'`'}0x8b9de9f8ac145af0a007d9d3c47817c6885d88c5${'`'}
${'`'}etherscan${'`'} | ${'`'}debank${'`'} | ${'`'}WA${'`'}

Token: ${'`'}$Shiba${'`'}
${'`'}etherscan${'`'} | 📊 ${'`'}dextools${'`'} | ${'`'}TVB${'`'}

🟢 **Buy Amount:** ${'`'}0.01 ETH${'`'}

Total Trades: ${'`'}1${'`'}
          `,
          offset: -11,
        },
      },
      {
        title: 'CopyTrade Report',
        text: 'At the heart of Profit Maker PRO is the revolutionary CopyTrade Report feature, a game-changer for traders looking to mirror the market\'s top performers.',
        message: {
          docs: [
            {
              fileName: 'CopyTrade Report.csv',
              fileSizeKB: 0,
              time: '15:34',
            },
            {
              fileName: 'CopyTrade Report.xlsx',
              fileSizeKB: 0,
              time: '15:34',
            },
          ],
          offset: -11,
        },
      },
    ],
  },
];


export default products;
export type {
  Product,
  Feature,
  Slide,
  Message,
  TGDoc,
};
