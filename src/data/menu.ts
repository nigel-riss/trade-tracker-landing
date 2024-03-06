interface MenuItem {
  id: string;
  title: string;
  href: string;
}


const menu: MenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
  },
  {
    id: 'products',
    title: 'Our Products',
    href: '/#products',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    href: '/#pricing',
  },
  {
    id: 'faq',
    title: 'Questions',
    href: '/#faq',
  },
];


export default menu;
export type {
  MenuItem,
};
