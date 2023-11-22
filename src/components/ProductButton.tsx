import styles from '@/styles/ProductButton.module.scss';


interface ProductButtonProps {
  id: string,
  title: string,
  onClick: () => void,
  iconWidth: number,
  iconHeight: number,
}

export default function ProductButton(props: ProductButtonProps) {
  const {
    id,
    title,
    onClick,
    iconWidth,
    iconHeight,
  } = props;

  return (
    <button
      className={styles.button}
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
