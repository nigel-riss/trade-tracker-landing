import { Product } from '@/data/products';
import styles from '@/styles/SliderSection.module.scss';
import IPhone from './IPhone';
import ProductButton from './ProductButton';


interface SliderSectionProps {
  products: Product[];
}

export default function SliderSection(props: SliderSectionProps) {
  const { products } = props;

  return (
    <section className={styles.section}>
      <nav className={styles.nav}>
        {products
          .filter((product) => !product.isComingSoon)
          .map((product) => {
            const {
              id,
              title,
              icon,
            } = product;
            return (
              <ProductButton
                key={id}
                id={id}
                title={title}
                onClick={() => {}}
                iconWidth={icon.width}
                iconHeight={icon.height}
              />
            );
          })}
      </nav>
      <div className={styles.content}>
        <div className={styles.phoneContainer}>
          <IPhone />
        </div>
      </div>
    </section>
  );
}
