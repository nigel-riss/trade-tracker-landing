import { Product } from '@/data/products';
import styles from '@/styles/SliderSection.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
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
  const leftButtonRef = useRef(null);
  const [leftButtonEl, setLeftButtonEl] = useState(null);
  const rightButtonRef = useRef(null);
  const [rightButtonEl, setRightButtonEl] = useState(null);

  useEffect(() => {
    setPaginationEl(paginationRef.current);
    setLeftButtonEl(leftButtonRef.current);
    setRightButtonEl(rightButtonRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    paginationRef.current,
    leftButtonRef.current,
    rightButtonRef.current,
  ]);

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
          leftButtonEl={leftButtonEl}
          rightButtonEl={rightButtonEl}
          onSlideChange={(index: number) => {
            setCurrentSlide(index);
          }}
        />

        <div className={styles.phoneContainer}>
          <div className={styles.navigation}>
            <button
              className={clsx({
                [styles.button]: true,
                [styles.buttonLeft]: true,
              })}
              type="button"
              ref={leftButtonRef}
            >
              &larr;
            </button>
            <button
              className={clsx({
                [styles.button]: true,
                [styles.buttonRight]: true,
              })}
              type="button"
              ref={rightButtonRef}
            >
              &rarr;
            </button>
          </div>
          <IPhone
            current={currentSlide}
            messages={currentProduct?.messages}
          />
        </div>
      </div>
    </section>
  );
}
