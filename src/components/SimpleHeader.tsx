import styles from '@/styles/Header.module.scss';
import Logo from './Logo';
import MainMenu from './MainMenu';
import BadgeFall from './BadgeFall';


interface SimpleHeaderProps {
  title: string;
}

export default function SimpleHeader(props: SimpleHeaderProps) {
  const {
    title,
  } = props;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <MainMenu />
      </nav>

      <div className={styles.caption}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className={styles.back}>
        <BadgeFall />
      </div>
    </header>
  );
}
