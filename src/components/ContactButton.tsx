import styles from '@/styles/ContactButton.module.scss';
import ArrowIcon from '@/assets/icons/arrow.svg';
import Link from 'next/link';


interface ContactButtonProps {
  href: string;
}

export default function ContactButton(props: ContactButtonProps) {
  const { href } = props;

  return (
    <Link
      className={styles.button}
      href={href}
    >
      Contact us
      <ArrowIcon className={styles.icon} />
    </Link>
  );
}
