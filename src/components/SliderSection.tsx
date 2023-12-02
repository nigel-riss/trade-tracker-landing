import { Product } from '@/data/products';
import styles from '@/styles/SliderSection.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import IPhone from './IPhone';
import ProductButton from './ProductButton';
import Slider from './Slider';
import SliderCaption from './SliderCaption';
import SliderPagination from './SliderPagination';


interface SliderSectionProps {
  products: Product[];
}

export default function SliderSection(props: SliderSectionProps) {
  const { products } = props;
  const [currentId, setCurrentId] = useState(products[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // const [currentProduct, setCurrentProduct] = useState(products[0]);

  const leftButtonRef = useRef(null);
  const [leftButtonEl, setLeftButtonEl] = useState(null);
  const rightButtonRef = useRef(null);
  const [rightButtonEl, setRightButtonEl] = useState(null);

  useEffect(() => {
    setLeftButtonEl(leftButtonRef.current);
    setRightButtonEl(rightButtonRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    leftButtonRef.current,
    rightButtonRef.current,
  ]);

  const currentProduct:Product | undefined = products
    .find((product) => product.id === currentId);

  return (
    <section id="slider" className={styles.section}>
      <nav
        id="slider-nav"
        className={styles.mobileNav}
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
        <SliderPagination
          currentIndex={currentSlideIndex}
          slidesCount={currentProduct?.slides.length || 0}
        />

        <div className={styles.mobileSlider}>
          <Slider
            key={currentId}
            slides={currentProduct?.slides}
            leftButtonEl={leftButtonEl}
            rightButtonEl={rightButtonEl}
            onSlideChange={(index: number) => {
              setCurrentSlideIndex(index);
            }}
          />
        </div>

        <div
          className={styles.desktopSlider}
          data-aos="fade-right"
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
                <div
                  className={styles.productContainer}
                  key={id}
                >
                  <SliderCaption
                    id={id}
                    title={title}
                    iconHeight={icon.height}
                    iconWidth={icon.width}
                    isCurrent={currentId === id}
                    onClick={() => {
                      setCurrentId(id);
                    }}
                  />
                  <div
                    className={clsx({
                      [styles.sliderContainer]: true,
                      [styles.isCurrent]: currentId === id,
                    })}
                  >
                    <Slider
                      key={id}
                      slides={product?.slides}
                      leftButtonEl={leftButtonEl}
                      rightButtonEl={rightButtonEl}
                      onSlideChange={(index: number) => {
                        setCurrentSlideIndex(index);
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>

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
              <svg
                viewBox="0 0 100 100"
                x="0px"
                y="0px"
                version="1.1"
              >
                <g transform="translate(10)">
                  <polygon points="11.895,6 11.895,94 88.105,50" />
                </g>
              </svg>
            </button>
            <button
              className={clsx({
                [styles.button]: true,
                [styles.buttonRight]: true,
              })}
              type="button"
              ref={rightButtonRef}
            >
              <svg
                viewBox="0 0 100 100"
                x="0px"
                y="0px"
                version="1.1"
              >
                <g transform="translate(10)">
                  <polygon points="11.895,6 11.895,94 88.105,50" />
                </g>
              </svg>
            </button>
          </div>
          <IPhone
            key={currentId}
            currentIndex={currentSlideIndex}
            messages={currentProduct?.messages}
          />
        </div>
      </div>
    </section>
  );
}
