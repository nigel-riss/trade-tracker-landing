import { Product } from '@/data/products';
import styles from '@/styles/SliderSection.module.scss';
import Slider from './Slider';
import IPhone from './IPhone';


interface SliderSectionProps {
  product: Product;
}

export default function SliderSection(props: SliderSectionProps) {
  const { product } = props;

  return (
    <section className={styles.section}>
      <Slider
        slides={product.slides}
      />
      <div className={styles.phoneContainer}>
        <IPhone />
      </div>
    </section>
  );
}
