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
          Build Your Win: Use smart data to beat the&nbsp;market.
          Make sure you&apos;re one of&nbsp;the&nbsp;top traders with Atlantes
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
          © Atlantes.eth&nbsp;
          {new Date().getFullYear() }
        </p>
        <div className={styles.legalLinks}>
          <Link
            className={styles.legalLink}
            href="/terms"
          >
            Terms of use
          </Link>
          &nbsp;/&nbsp;
          <Link
            className={styles.legalLink}
            href="/privacy"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
