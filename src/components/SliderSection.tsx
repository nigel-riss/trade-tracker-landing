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
  const [currentSlide, setCurrentSlide] = useState(0);
  const paginationRef = useRef(null);
  const [paginationEl, setPaginationEl] = useState(null);

  useEffect(() => {
    setPaginationEl(paginationRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationRef.current]);

  const currentProduct:Product | undefined = products
    .find((product) => product.id === currentId);

  return (
    <section className={styles.section}>
      <nav
        id="slider-nav"
        className={styles.nav}
      >
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
          slides={currentProduct?.slides}
          paginationEl={paginationEl}
          onSlideChange={(index: number) => {
            console.log(index);
            setCurrentSlide(index);
          }}
        />
        <div className={styles.phoneContainer}>
          <IPhone
            current={currentSlide}
            messages={currentProduct?.messages}
          />
        </div>
      </div>
    </section>
  );
}
