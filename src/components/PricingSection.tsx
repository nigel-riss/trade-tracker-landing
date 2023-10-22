import styles from '@/styles/PricingSection.module.scss';
import Title from './Title';
import Subtitle from './Subtitle';
import Calculator from './Calculator';
import SpecialOffer from './SpecialOffer';


interface PricingSectionProps {
  
}

export default function PricingSection(props: PricingSectionProps) {
  const {
    
  } = props;

  return (
    <section id="pricing" className={styles.section}>
      <header className={styles.header}>
        <Title>Pricing</Title>
        <Subtitle>
          YardTools is an indispensable part of any crypto traders toolkit,
          able to constantly monitor every token on the market with all
          the information one may need in one place.
        </Subtitle>
      </header>

      <Calculator />

      <SpecialOffer />
    </section>
  );
}
