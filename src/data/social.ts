interface SocialItem {
  id: string;
  title: string;
  href: string;
  width: number;
  height: number;
}


const social = [
  {
    id: 'telegram',
    title: 'Telegram',
    href: 'https://t.me/atlantes_eth',
    width: 36,
    height: 37,
  },
  // {
  //   id: 'facebook',
  //   title: 'Facebook',
  //   href: '#',
  //   width: 36,
  //   height: 37,
  // },
  // {
  //   id: 'instagram',
  //   title: 'Instagram',
  //   href: '#',
  //   width: 36,
  //   height: 37,
  // },
  {
    id: 'twitter',
    title: 'X (Twitter)',
    href: 'https://x.com/atlantes_io',
    width: 36,
    height: 37,
  },
  // {
  //   id: 'discord',
  //   title: 'Discord',
  //   href: '#',
  //   width: 48,
  //   height: 37,
  // },
  // {
  //   id: 'whatsapp',
  //   title: 'WhatsApp',
  //   href: '#',
  //   width: 36,
  //   height: 37,
  // },
];

export default social;
export type { SocialItem };
