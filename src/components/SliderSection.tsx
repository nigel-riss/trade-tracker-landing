import { Product } from '@/data/products';
import styles from '@/styles/SliderSection.module.scss';
import { useEffect, useRef, useState } from 'react';
import IPhone from './IPhone';
import ProductButton from './ProductButton';
import Slider from './Slider';


interface SliderSectionProps {
  products: Product[];
}

export default function SliderSection(props: SliderSectionProps) {
  const { products } = props;
  const [currentId, setCurrentId] = useState(products[0].id);
  const paginationRef = useRef(null);
  const [paginationEl, setPaginationEl] = useState(null);

  useEffect(() => {
    setPaginationEl(paginationRef.current);
  }, [paginationRef.current]);

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
                onClick={() => {
                  setCurrentId(id);
                }}
                iconWidth={icon.width}
                iconHeight={icon.height}
                isCurrent={currentId === id}
              />
            );
          })}
      </nav>

      <div className={styles.content}>
        <div
          className={styles.pagination}
          ref={paginationRef}
        />
        <Slider
          key={currentId}
          slides={products.find((product) => product.id === currentId)?.slides}
          paginationEl={paginationEl}
        />
        <div className={styles.phoneContainer}>
          <IPhone />
        </div>
      </div>
    </section>
  );
}
