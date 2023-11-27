interface Duration {
  name: string;
  title: string;
  multiplier: number;
}

const durations: Duration[] = [
  {
    name: 'one',
    title: '1 month',
    multiplier: 1,
  },
  {
    name: 'three',
    title: '3 months',
    multiplier: 0.9,
  },
];


export default durations;
