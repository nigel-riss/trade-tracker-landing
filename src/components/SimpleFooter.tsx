import styles from '@/styles/Footer.module.scss';
import Link from 'next/link';


export default function SimpleFooter() {
  return (
    <footer
      className={styles.footer}
      data-aos="fade"
    >
      <div className={styles.legalInfo}>
        <p className={styles.copyrights}>Atlantes.eth © 2023</p>
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
