import styles from '@/styles/Header.module.scss';
import Logo from './Logo';
import MainMenu from './MainMenu';
import BadgeFall from './BadgeFall';


interface SimpleHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SimpleHeader(props: SimpleHeaderProps) {
  const {
    title,
    subtitle,
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
        {subtitle && (<p className={styles.subtitle}>{subtitle}</p>)}
      </div>

      <div className={styles.back}>
        <BadgeFall />
      </div>
    </header>
  );
}
