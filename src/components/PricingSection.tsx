'use client';

import styles from '@/styles/PricingSection.module.scss';
import { useState } from 'react';
import { Product } from '@/data/products';
import durations from '@/data/constants';
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
      <header className={styles.header}>
        <Title>Pricing</Title>
        <Subtitle>
          YardTools is an indispensable part of any crypto traders toolkit,
          able to constantly monitor every token on the market with all
          the information one may need in one place.
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
        calcDiscount={(price: number) => Math.round(price * 0.75)}
      />

      <SpecialOffer />
    </section>
  );
}
