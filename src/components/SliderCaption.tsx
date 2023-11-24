import styles from '@/styles/SliderCaption.module.scss';
import clsx from 'clsx';


interface SliderCaptionProps {
  id: string;
  title: string;
  iconWidth: number;
  iconHeight: number;
  isCurrent: boolean;
  onClick: () => void,
}

export default function SliderCaption(props: SliderCaptionProps) {
  const {
    id,
    title,
    iconWidth,
    iconHeight,
    isCurrent,
    onClick,
  } = props;

  return (
    <button
      className={clsx({
        [styles.caption]: true,
        [styles.isCurrent]: isCurrent,
      })}
      type="button"
      onClick={onClick}
    >
      <div className={styles.icon}>
        <svg
          viewBox={`0 0 ${iconWidth} ${iconHeight}`}
        >
          <use xlinkHref={`#${id}-icon`} />
        </svg>
      </div>
      <h3 className={styles.title}>
        {title}
      </h3>
    </button>
  );
}
