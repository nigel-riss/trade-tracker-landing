import { Product } from '@/data/products';
import styles from '@/styles/SlidersSection.module.scss';


interface SlidersSectionProps {
  products: Product[];
}

export default function SlidersSection(props: SlidersSectionProps) {
  const { products } = props;

  return (
    <div className={styles.div}>
      SlidersSection
    </div>
  );
}
