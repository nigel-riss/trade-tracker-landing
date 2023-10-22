import styles from '@/styles/ContactButton.module.scss';


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
    </button>
  );
}
