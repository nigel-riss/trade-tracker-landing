/* eslint-disable react/jsx-one-expression-per-line */
import styles from '@/styles/Header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from './Logo';
import MainMenu from './MainMenu';
import CopyIcon from '../assets/icons/copy.svg';


export default function CheckoutHeader() {
  return (
    <header
      className={clsx({
        [styles.header]: true,
        [styles.headerMini]: true,
      })}
    >
      <nav className={styles.nav}>
        <Logo />
        <MainMenu />
      </nav>

      <div className={styles.checkout}>
        <h1 className={styles.greeting}>
          Hi,
          <em>@username</em>
        </h1>
        <p className={styles.text}>
          To pay, you must use this link within <b>19 minutes 55 seconds</b> You can also select additional productsor <Link href="/"> return to the site</Link>. After payment you will be redirected to the telegram bot
        </p>
        <button
          className={styles.copyCode}
          type="button"
        >
          0x06D7b160F31C8a017b28F5dfbD784d29c4b12A04
          <CopyIcon />
        </button>
      </div>
    </header>
  );
}
