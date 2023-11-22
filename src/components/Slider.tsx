import { Slide } from '@/data/products';
import styles from '@/styles/Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  Navigation,
  Pagination,
} from 'swiper/modules';


interface SliderProps {
  slides?: Slide[],
  paginationEl: HTMLElement | null,
}

export default function Slider(props: SliderProps) {
  const {
    slides,
    paginationEl,
  } = props;

  const paginationClass = styles.pagination;
  const currentBulletClass = styles.currentBullet;

  return (
    <Swiper
      className={styles.slider}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => console.log(swiper.activeIndex)}
      // onSwiper={(swiper) => console.log(swiper)}
      loop
      // navigation={{
      //   enabled: true,
      // }}
      pagination={{
        enabled: true,
        horizontalClass: paginationClass,
        bulletActiveClass: currentBulletClass,
        el: paginationEl,
      }}
      modules={[
        Navigation,
        Pagination,
      ]}
    >
      {/* <div className={styles.navigation}>
        <button className={styles.prev}>&larr;</button>
      </div> */}
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
