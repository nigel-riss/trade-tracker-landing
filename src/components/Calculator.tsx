import { Product } from '@/data/products';
import styles from '@/styles/Calculator.module.scss';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import PriceCard from './PriceCard';
import PlanToggle from './PlanToggle';
import CTAButton from './CTAButton';
import GhostButton from './GhostButton';


interface CalculatorProps {
  calcDiscount: (price: number, isProPlan: boolean) => number;
  products: Product[];
}

export default function Calculator(props: CalculatorProps) {
  const {
    calcDiscount,
    products,
  } = props;

  const [isProPlan, setIsProPlan] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsCartVisible(entry.isIntersecting));
    }, { threshold: 0.5 });

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);


  return (
    <div
      className={styles.calculator}
      ref={sectionRef}
    >
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

      <div
        className={clsx({
          [styles.cart]: true,
          [styles.isCartVisible]: isCartVisible,
        })}
      >
        <div className={styles.priceRow}>
          <div className={styles.prices}>
            <span className={styles.originalPrice}>$550</span>
            <span className={styles.currentPrice}>
              $
              {calcDiscount(550, isProPlan)}
            </span>
            <span className={styles.perMonth}> / per month</span>
          </div>
          <div className={styles.toggleWrapper}>
            <PlanToggle
              isChecked={isProPlan}
              onToggle={() => setIsProPlan(!isProPlan)}
            />
          </div>
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
