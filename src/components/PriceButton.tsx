import styles from '@/styles/PriceButton.module.scss';
import clsx from 'clsx';


interface PriceButtonProps {
  isActive?: boolean;
  value: number;
  onClick: () => void;
}

export default function PriceButton(props: PriceButtonProps) {
  const {
    isActive,
    value,
    onClick,
  } = props;

  return (
    <button
      className={clsx({
        [styles.button]: true,
        [styles.isActive]: isActive,
      })}
      onClick={onClick}
      type="button"
    >
      {value}
      &nbsp;USDT
    </button>
  );
}
