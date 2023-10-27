import { Product } from '@/data/products';
import styles from '@/styles/Calculator.module.scss';
import PriceCard from './PriceCard';


interface CalculatorProps {
  products: Product[];
}

export default function Calculator(props: CalculatorProps) {
  const {
    products,
  } = props;

  return (
    <div className={styles.div}>
      {products.map((product: Product) => {
        const {
          id,
          title,
          subtitle,
          features,
        } = product;

        return (
          <PriceCard
            key={id}
            title={title}
            subtitle={subtitle}
            features={features}
          />
        );
      })}
    </div>
  );
}
