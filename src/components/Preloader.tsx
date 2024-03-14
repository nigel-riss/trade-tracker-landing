import styles from '@/styles/Preloader.module.scss';
import Icon from '../assets/progress-2.svg';


export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <p className={styles.loading}>Loading Invoice</p>
      <Icon />
    </div>
  );
}
