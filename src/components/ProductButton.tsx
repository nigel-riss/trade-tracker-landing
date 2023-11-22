import styles from '@/styles/ProductButton.module.scss';
import clsx from 'clsx';


interface ProductButtonProps {
  id: string,
  title: string,
  onClick: () => void,
  iconWidth: number,
  iconHeight: number,
  isCurrent: boolean,
}

export default function ProductButton(props: ProductButtonProps) {
  const {
    id,
    title,
    onClick,
    iconWidth,
    iconHeight,
    isCurrent = false,
  } = props;

  return (
    <button
      className={clsx({
        [styles.button]: true,
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
      <h4 className={styles.title}>
        {title}
      </h4>
    </button>
  );
}
