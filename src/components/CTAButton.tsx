import styles from '@/styles/CTAButton.module.scss';


interface CTAButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function CTAButton(props: CTAButtonProps) {
  const {
    children,
    onClick,
  } = props;

  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
