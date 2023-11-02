import { Product } from '@/data/products';
import styles from '@/styles/Calculator.module.scss';
import { useState } from 'react';
import PriceCard from './PriceCard';
import PlanToggle from './PlanToggle';
import CTAButton from './CTAButton';
import GhostButton from './GhostButton';


interface CalculatorProps {
  calcDiscount: (price: number) => number;
  products: Product[];
}

export default function Calculator(props: CalculatorProps) {
  const {
    calcDiscount,
    products,
  } = props;

  const [isProPlan, setIsProPlan] = useState(false);

  return (
    <div className={styles.calculator}>
      <div className={styles.heading}>
        <h3 className={styles.title}>Choose products:</h3>
        <PlanToggle
          isChecked={isProPlan}
          onToggle={() => setIsProPlan(!isProPlan)}
        />
      </div>

      <div className={styles.products}>
        {products.map((product: Product) => {
          const {
            id,
            title,
            subtitle,
            features,
            price,
          } = product;

          return (
            <PriceCard
              key={id}
              title={title}
              subtitle={subtitle}
              features={features}
              price={price}
            />
          );
        })}
      </div>

      <div className={styles.cart}>
        <div className={styles.priceRow}>
          <div className={styles.prices}>
            <span className={styles.originalPrice}>$550</span>
            <span className={styles.currentPrice}>
              $
              {calcDiscount(550, isProPlan)}
            </span>
          </div>
          <PlanToggle
            isChecked={isProPlan}
            onToggle={() => setIsProPlan(!isProPlan)}
          />
        </div>
        <div className={styles.buttonsRow}>
          <CTAButton onClick={() => {}}>
            Buy
          </CTAButton>
          <GhostButton
            disabled
            onClick={() => {}}
          >
            Free trial
          </GhostButton>
        </div>
      </div>
    </div>
  );
}
