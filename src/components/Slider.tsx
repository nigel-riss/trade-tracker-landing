import { Slide } from '@/data/products';
import styles from '@/styles/Slider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  Pagination,
} from 'swiper/modules';


interface SliderProps {
  slides: Slide[],
}

export default function Slider(props: SliderProps) {
  const {
    slides,
  } = props;

  const paginationClass = styles.pagination;
  const currentBulletClass = styles.currentBullet;

  return (
    <Swiper
      className={styles.slider}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => console.log(swiper)}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        enabled: true,
        horizontalClass: paginationClass,
        bulletActiveClass: currentBulletClass,
      }}
      modules={[Pagination]}
    >
      {slides.map((slide) => (
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
