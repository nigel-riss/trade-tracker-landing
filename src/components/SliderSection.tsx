import { Product } from '@/data/products';
import styles from '@/styles/SliderSection.module.scss';
import Slider from './Slider';


interface SliderSectionProps {
  product: Product;
}

export default function SliderSection(props: SliderSectionProps) {
  const { product } = props;

  return (
    <section className={styles.section}>
      SliderSection
      <Slider />
    </section>
  );
}
