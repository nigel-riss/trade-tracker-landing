import styles from '@/styles/GhostButton.module.scss';
import Link from 'next/link';


interface GhostButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function GhostButton(props: GhostButtonProps) {
  const {
    children,
    href,
  } = props;

  return (
    <Link
      className={styles.button}
      href={href}
    >
      {children}
    </Link>
  );
}
