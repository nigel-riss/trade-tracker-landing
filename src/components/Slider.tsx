import { Slide } from '@/data/products';
import styles from '@/styles/Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  EffectFade,
  Navigation,
} from 'swiper/modules';


interface SliderProps {
  slides?: Slide[],
  leftButtonEl: HTMLElement | null,
  rightButtonEl: HTMLElement | null,
  onSlideChange: (index: number) => void,
}

export default function Slider(props: SliderProps) {
  const {
    slides,
    leftButtonEl,
    rightButtonEl,
    onSlideChange,
  } = props;


  return (
    <Swiper
      className={styles.slider}
      // effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        onSlideChange(swiper.realIndex);
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      loop
      navigation={{
        enabled: true,
        prevEl: leftButtonEl,
        nextEl: rightButtonEl,
      }}
      modules={[
        // EffectFade,
        Navigation,
      ]}
    >
      {slides && slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <div className={styles.slide}>
            <h3 className={styles.title}>{slide.title}</h3>
            <p className={styles.text}>{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
