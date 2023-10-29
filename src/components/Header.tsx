import styles from '@/styles/Header.module.scss';
import Logo from './Logo';
import MainMenu from './MainMenu';


export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <MainMenu />
      </nav>

      <div className={styles.caption}>
        <h1 className={styles.title}>
          Unlock the next level
        </h1>
        <p className={styles.subtitle}>
          A unique set of tools that provides a detailed analysis of the volume
          changes in currencies and info on the buyers making those trends.
        </p>
      </div>
    </header>
  );
}
