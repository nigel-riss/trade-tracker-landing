interface Product {
  id: string;
  title: string;
  text: string;
}

const products: Product[] = [
  {
    id: 'bot1',
    title: 'Trade volume bot',
    text: 'A unique set of tools that provides a detailed analysis of the volume changes',
  },
  {
    id: 'bot2',
    title: 'Bot name 2',
    text: 'A unique set of tools that provides a detailed analysis of the volume changes',
  },
  {
    id: 'bot3',
    title: 'Bot name 3',
    text: 'A unique set of tools that provides a detailed analysis of the volume changes',
  },
  {
    id: 'bot4',
    title: 'Bot name 4',
    text: 'A unique set of tools that provides a detailed analysis of the volume changes',
  },
  {
    id: 'bot5',
    title: 'Bot name 5',
    text: 'A unique set of tools that provides a detailed analysis of the volume changes',
  },
];

export default products;
export type { Product };
