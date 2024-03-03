/* eslint-disable react/jsx-one-expression-per-line */
import styles from '@/styles/Header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from './Logo';
import MainMenu from './MainMenu';
import CopyIcon from '../assets/icons/copy.svg';


interface CheckoutHeaderProps {
  userName: string;
  walletEth?: string | null;
  walletTrc?: string | null;
}


export default function CheckoutHeader(props: CheckoutHeaderProps) {
  const {
    userName,
    walletEth,
    walletTrc,
  } = props;

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
          <em>@{userName}</em>
        </h1>
        <p className={styles.text}>
          To pay, you have to use this links within <b>19 minutes 55 seconds</b>
          <br />
          You can also <Link href="/"> return to the site</Link> and select additional products.
          <br />
          After payment you will be redirected to the telegram bot
        </p>
        {walletEth && (
          <button
            className={styles.copyCode}
            type="button"
          >
            {walletEth}
            <CopyIcon />
          </button>
        )}
        {walletTrc && (
          <button
            className={styles.copyCode}
            type="button"
          >
            {walletTrc}
            <CopyIcon />
          </button>
        )}
      </div>
    </header>
  );
}
