/* eslint-disable max-len */
import { Product } from '@/data/products';
import styles from '@/styles/SliderSection.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import IPhone from './IPhone';
import ProductButton from './ProductButton';
import MobileSlider from './MobileSlider';
import SliderCaption from './SliderCaption';
import SliderPagination from './SliderPagination';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import DesktopSlider from './DesktopSlider';


interface SliderSectionProps {
  currentProductId: string;
  onProductChange: (id: string) => void;
  products: Product[];
}

export default function SliderSection(props: SliderSectionProps) {
  const {
    currentProductId,
    onProductChange,
    products,
  } = props;

  // const [currentSlideIndeces, setCurrentSlideIndeces] = useState(
  //   products.reduce(
  //     (acc, curr) => ({ ...acc, [curr.id]: 0 }),
  //     {},
  //   ),
  // );
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);


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

  const currentProduct = products
    .find((product) => product.id === currentProductId);

  return (
    <section id="slider" className={styles.section}>
      <nav
        id="slider-nav"
        className={styles.mobileNav}
      >
        {products
          .filter((product) => !product.isComingSoon)
          .map(({
            id,
            title,
            icon,
          }) => (
            <ProductButton
              key={id}
              id={id}
              title={title}
              onClick={() => {
                onProductChange(id);
              }}
              iconWidth={icon.width}
              iconHeight={icon.height}
              isCurrent={currentProductId === id}
            />
          ))}
      </nav>

      <div className={styles.content}>
        <SliderPagination
          currentIndex={currentSlideIndex}
          slidesCount={currentProduct?.slides.length || 0}
        />

        <div className={styles.mobileSlider}>
          <MobileSlider
            key={currentProductId}
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
            .map(({
              id,
              title,
              icon,
              slides,
            }) => (
              <div
                className={styles.productContainer}
                key={id}
              >
                <SliderCaption
                  id={id}
                  title={title}
                  iconHeight={icon.height}
                  iconWidth={icon.width}
                  isCurrent={currentProductId === id}
                  onClick={() => {
                    onProductChange(id);
                    setCurrentSlideIndex(0);
                  }}
                />
                <div
                  className={clsx({
                    [styles.sliderContainer]: true,
                    [styles.isCurrent]: currentProductId === id,
                  })}
                >
                  <DesktopSlider
                    key={id}
                    slides={slides}
                    currentSlideId={currentSlideIndex}
                  />
                  {/* <Slider
                    onSlideChange={(index: number) => {
                      if (id === currentProductId) {
                        setCurrentSlideIndeces((prev) => ({
                          ...prev,
                          [currentProductId]: index,
                        }));
                      }
                    }}
                  /> */}
                </div>
              </div>
            ))}
        </div>

        <div className={styles.phoneContainer}>
          <div className={styles.navigation}>
            <LeftButton ref={leftButtonRef} />
            <RightButton ref={rightButtonRef} />
          </div>
          <div className={styles.desktopNavigation}>
            <LeftButton
              clickHandler={() => {
                if (!currentProduct) { return; }
                if (currentSlideIndex <= 0) {
                  setCurrentSlideIndex(currentProduct.slides.length - 1);
                } else {
                  setCurrentSlideIndex((prev) => prev - 1);
                }
              }}
            />
            <RightButton
              clickHandler={() => {
                if (!currentProduct) { return; }
                if (currentSlideIndex >= currentProduct.slides.length - 1) {
                  setCurrentSlideIndex(0);
                } else {
                  setCurrentSlideIndex((prev) => prev + 1);
                }
              }}
            />
          </div>
          <IPhone
            key={currentProductId}
            currentIndex={currentSlideIndex}
            slides={currentProduct?.slides}
          />
        </div>
      </div>
    </section>
  );
}
