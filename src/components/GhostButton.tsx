import styles from '@/styles/GhostButton.module.scss';


interface GhostButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export default function GhostButton(props: GhostButtonProps) {
  const {
    children,
    disabled,
    onClick,
  } = props;

  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
