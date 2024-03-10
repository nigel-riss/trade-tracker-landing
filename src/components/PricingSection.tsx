'';

import styles from '@/styles/PricingSection.module.scss';
import { Product } from '@/data/products';
import Title from './Title';
import Subtitle from './Subtitle';
import Calculator from './Calculator';
import SpecialOffer from './SpecialOffer';
import TGDoc from './TGDoc';


interface PricingSectionProps {
  products: Product[];
}

export default function PricingSection(props: PricingSectionProps) {
  const { products } = props;

  return (
    <section id="pricing" className={styles.section}>
      <TGDoc
        fileName="Profit Maker.csv"
        fileSizeKB={107.3}
        time="16:55"
      />
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
      </header>

      <Calculator
        products={products}
      />

      <SpecialOffer />
    </section>
  );
}
