import styles from '@/styles/CTAButton.module.scss';
import Link from 'next/link';


interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function CTAButton(props: CTAButtonProps) {
  const {
    children,
    href,
  } = props;

  return (
    <Link
      className={styles.button}
      href={href}
      target="_blank"
    >
      {children}
    </Link>
  );
}
