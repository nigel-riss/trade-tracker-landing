import styles from '@/styles/Footer.module.scss';
import clsx from 'clsx';
import Link from 'next/link';


export default function SimpleFooter() {
  return (
    <footer
      className={clsx({
        [styles.footer]: true,
        [styles.simpleFooter]: true,
      })}
    >
      <div className={styles.legalInfo}>
        <p className={styles.copyrights}>
          © Atlantes.eth&nbsp;
          {new Date().getFullYear() }
        </p>
        <div className={styles.legalLinks}>
          <Link
            className={styles.legalLink}
            href="/terms.html"
          >
            Terms of use
          </Link>
          &nbsp;/&nbsp;
          <Link
            className={styles.legalLink}
            href="/privacy.html"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
