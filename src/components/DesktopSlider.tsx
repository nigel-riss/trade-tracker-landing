import { Slide } from '@/data/products';
import styles from '@/styles/DesktopSlider.module.scss';
import clsx from 'clsx';


interface DesktopSliderProps {
  currentSlideId: number,
  slides?: Slide[],
}

export default function DesktopSlider(props: DesktopSliderProps) {
  const {
    currentSlideId,
    slides,
  } = props;

  return (
    <div className={styles.slider}>
      {slides?.map((slide, index) => (
        <div
          key={slide.title}
          className={clsx({
            [styles.slide]: true,
            [styles.activeSlide]: index === currentSlideId,
          })}
        >
          <h3 className={styles.title}>{slide.title}</h3>
          <p className={styles.text}>{slide.text}</p>
        </div>
      ))}
    </div>
  );
}
