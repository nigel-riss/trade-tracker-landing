import styles from '@/styles/Header.module.scss';
import Logo from './Logo';
import MainMenu from './MainMenu';
import BadgeFall from './BadgeFall';


export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <MainMenu />
      </nav>

      <div className={styles.caption}>
        <h1 className={styles.title}>
          TRADE smart
          <br />
          earn EASY
        </h1>
        <p className={styles.subtitle}>
          Build Your Win: Use smart data to&nbsp;beat the&nbsp;market.
          <span><br /></span>
          <i> </i>
          Make sure you&apos;re one of the top traders with&nbsp;Atlantes
        </p>
      </div>

      <div className={styles.back}>
        <BadgeFall amount={3} />
      </div>
    </header>
  );
}
