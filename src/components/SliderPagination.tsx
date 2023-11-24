import styles from '@/styles/SliderPagination.module.scss';
import clsx from 'clsx';


interface SliderPaginationProps {
  currentIndex: number;
  slidesCount: number;
}

export default function SliderPagination(props: SliderPaginationProps) {
  const {
    currentIndex,
    slidesCount,
  } = props;

  return (
    <div className={styles.pagination}>
      {Array.from({ length: slidesCount }, (_, index) => (
        <span
          className={clsx({
            [styles.bullet]: true,
            [styles.currentBullet]: currentIndex === index,
          })}
          key={index}
        />
      ))}
    </div>
  );
}
