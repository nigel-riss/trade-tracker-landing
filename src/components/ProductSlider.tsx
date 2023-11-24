import styles from '@/styles/ProductSlider.module.scss';
import SliderCaption from './SliderCaption';
import Slider from './Slider';


interface ProductSliderProps {
  id: string;
  title: string;
  iconHeight: number;
  iconWidth: number;
  isCurrent: boolean;
}

export default function ProductSlider(props: ProductSliderProps) {
  const {
    id,
    title,
    iconHeight,
    iconWidth,
    isCurrent,
  } = props;

  return (
    <div className={styles.div}>
      <SliderCaption
        id={id}
        title={title}
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        isCurrent={isCurrent}
        onClick={() => {
          setCurrentId(id);
        }}
      />
      <Slider
        slides={product?.slides}
        paginationEl={paginationEl}
        leftButtonEl={leftButtonEl}
        rightButtonEl={rightButtonEl}
        onSlideChange={(index: number) => {
          setCurrentSlide(index);
        }}
      />
    </div>
  );
}
