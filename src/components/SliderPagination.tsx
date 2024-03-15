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
        // <span
        //   className={clsx({
        //     [styles.bullet]: true,
        //     [styles.currentBullet]: currentIndex === index,
        //   })}
        //   key={index}
        // />
        <svg
          className={clsx({
            [styles.bullet]: true,
            [styles.currentBullet]: currentIndex === index,
          })}
          key={index}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="45" cx="50" cy="50" />
        </svg>
      ))}
    </div>
  );
}
