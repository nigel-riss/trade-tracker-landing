import styles from '@/styles/Logo.module.scss';
import LogoImage from '@/assets/img/logo.svg';
import Link from 'next/link';


export default function Logo() {
  return (
    <Link
      className={styles.logo}
      href="/"
    >
      <LogoImage />
    </Link>
  );
}
