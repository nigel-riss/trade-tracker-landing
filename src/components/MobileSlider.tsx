import { Slide } from '@/data/products';
import styles from '@/styles/MobileSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Message from './Message';
import TGDoc from './TGDoc';


interface MobileSliderProps {
  slides?: Slide[],
  leftButtonEl: HTMLElement | null,
  rightButtonEl: HTMLElement | null,
  onSlideChange: (index: number) => void,
}

export default function MobileSlider(props: MobileSliderProps) {
  const {
    slides,
    leftButtonEl,
    rightButtonEl,
    onSlideChange,
  } = props;


  return (
    <Swiper
      className={styles.slider}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        onSlideChange(swiper.realIndex);
      }}
      loop
      navigation={{
        enabled: true,
        prevEl: leftButtonEl,
        nextEl: rightButtonEl,
      }}
      modules={[
        Navigation,
      ]}
    >
      {slides && slides.map((slide) => (
        <SwiperSlide
          key={slide.title}
          style={{
            height: 'auto',
          }}
        >
          <div className={styles.slide}>
            <h3 className={styles.title}>{slide.title}</h3>
            <p className={styles.text}>{slide.text}</p>
            <div className={styles.messageWrapper}>
              <Message>
                {('text' in slide.message) && (
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {slide.message.text}
                  </Markdown>
                )}
                {('docs' in slide.message) && (
                  slide.message.docs.map(({
                    fileName,
                    fileSizeKB,
                    time,
                  }) => (
                    <TGDoc
                      fileName={fileName}
                      fileSizeKB={fileSizeKB}
                      time={time}
                      key={fileName}
                    />
                  ))
                )}
              </Message>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
