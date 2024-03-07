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
          To pay, you have to use this links within
          <br />
          <b>19 minutes 55 seconds</b>
          <br />
          You can also <Link href="/"> return to the site</Link> and select additional products.
          <br />
          After payment you will be redirected
          to&nbsp;the&nbsp;telegram&nbsp;bot
        </p>
        {walletEth && (
          <div className={styles.wallet}>
            <h2 className={styles.walletTitle}>ETH Wallet:</h2>
            <button
              className={styles.copyCode}
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(walletEth);
              }}
            >
              {walletEth}
              <CopyIcon />
            </button>
          </div>
        )}
        {walletTrc && (
          <div className={styles.wallet}>
            <h2 className={styles.walletTitle}>TRC Wallet:</h2>
            <button
              className={styles.copyCode}
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(walletTrc);
              }}
            >
              {walletTrc}
              <CopyIcon />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
