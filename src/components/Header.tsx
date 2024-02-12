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
          Master the Market with Atlantes.io: Elevate Your Earnings,
          Simplify Success. Dive into the&nbsp;essence of&nbsp;profit with tools
          that illuminate trends and unlock potentials, making every
          trade not just a&nbsp;transaction, but&nbsp;a&nbsp;triumph
        </p>
      </div>

      <div className={styles.back}>
        <BadgeFall amount={3} />
      </div>
    </header>
  );
}
