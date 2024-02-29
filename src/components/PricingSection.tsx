'';

import styles from '@/styles/PricingSection.module.scss';
import { useState } from 'react';
import { Product } from '@/data/products';
import durations from '@/data/duration';
import Title from './Title';
import Subtitle from './Subtitle';
import Calculator from './Calculator';
import SpecialOffer from './SpecialOffer';
import PeriodToggle from './PeriodToggle';


interface PricingSectionProps {
  products: Product[];
}

export default function PricingSection(props: PricingSectionProps) {
  const { products } = props;
  const [period, setPeriod] = useState(durations[0].name);

  return (
    <section id="pricing" className={styles.section}>
      <header
        className={styles.header}
        data-aos="fade-up"
      >
        <Title>Pricing</Title>
        <Subtitle>
          Your trading edge: Access exclusive, in-depth crypto insights
          with our Standard or Pro versions. Premium insights for serious
          traders, priced to match your ambition
        </Subtitle>

        <PeriodToggle
          value={period}
          onToggle={(selectedValue: string) => {
            setPeriod(selectedValue);
          }}
        />
      </header>

      <Calculator
        products={products}
        periodName={period}
      />

      <SpecialOffer />
    </section>
  );
}
