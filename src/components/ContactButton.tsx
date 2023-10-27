import styles from '@/styles/ContactButton.module.scss';
import ArrowIcon from '@/assets/icons/arrow.svg';


interface ContactButtonProps {
  onClick: () => void;
}

export default function ContactButton(props: ContactButtonProps) {
  const {
    onClick,
  } = props;

  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
    >
      Contact us
      <ArrowIcon className={styles.icon} />
    </button>
  );
}
