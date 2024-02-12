import styles from '@/styles/Footer.module.scss';
import Link from 'next/link';
import menu, { MenuItem } from '@/data/menu';
import products, { Product } from '@/data/products';
import social, { SocialItem } from '@/data/social';
import Logo from './Logo';


const getMenuItems = (
  items: Array<MenuItem | Product | SocialItem>,
) => items.map((item: MenuItem | Product | SocialItem) => {
  const {
    id,
    href,
    title,
  } = item;

  return (
    <li
      className={styles.item}
      key={id}
    >
      <Link
        className={styles.link}
        href={`/${href}`}
      >
        {title}
      </Link>
    </li>
  );
});


export default function Footer() {
  return (
    <footer
      className={styles.footer}
      data-aos="fade"
    >
      <div className={styles.info}>
        <Logo />
        <p className={styles.description}>
          Master the Market with Atlantes.io: Elevate Your Earnings,
          Simplify Success. Dive into the&nbsp;essence of&nbsp;profit with tools
          that illuminate trends and unlock potentials, making every
          trade not just a&nbsp;transaction, but&nbsp;a&nbsp;triumph
        </p>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.column}>
          <h3 className={styles.title}>Navigation</h3>
          <div className={styles.listColumn}>
            <ul className={styles.list}>
              {getMenuItems(menu)}
            </ul>
          </div>

          <div className={styles.listColumn}>
            <ul className={styles.list}>
              {getMenuItems(products)}
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Socials</h3>
          <ul className={styles.list}>
            {getMenuItems(social)}
          </ul>
        </div>
      </nav>

      <div className={styles.legalInfo}>
        <p className={styles.copyrights}>
          Atlantes.eth © 2023 &mdash;
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
