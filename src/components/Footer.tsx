import styles from '@/styles/Footer.module.scss';
import Link from 'next/link';
import Logo from './Logo';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <Logo />
        <p className={styles.description}>
          A unique set of tools that provides a detailed analysis of the volume
          changes in currencies and info on the buyers making those trends.
        </p>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.column}>
          <h3 className={styles.title}>Navigation</h3>
          <ul className={styles.list}>
            <div className={styles.listColumn}>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Our products
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Pricing
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Questions
                </Link>
              </li>
            </div>
            <div className={styles.listColumn}>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Product 1
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Product 2
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Product 3
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Product 4
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Product 5
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Socials</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/"
              >
                Telegram
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/"
              >
                Instagram
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/"
              >
                Discord
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/"
              >
                Facebook
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/"
              >
                WhatsApp
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/"
              >
                X (Twitter)
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.legalInfo}>
        <p className={styles.copyrights}>Atlantes.eth © 2023</p>
        <div className={styles.legalLinks}>
          <Link
            className={styles.legalLink}
            href="/"
          >
            Terms of use
          </Link>
          &nbsp;/&nbsp;
          <Link
            className={styles.legalLink}
            href="/"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
