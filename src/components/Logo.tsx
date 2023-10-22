import styles from '@/styles/Logo.module.scss';
import LogoImage from '@/assets/img/logo.svg';


export default function Logo() {
  return (
    <div className={styles.logo}>
      <LogoImage />
    </div>
  );
}
