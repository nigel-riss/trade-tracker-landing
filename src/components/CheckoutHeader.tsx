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
  products?: string[],
  status?: string,
  price?: number,
}


export default function CheckoutHeader(props: CheckoutHeaderProps) {
  const {
    userName,
    walletEth,
    walletTrc,
    products,
    status,
    price,
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
          To complete your subscription, please send the payment within
          <b> 19 minutes 55 seconds</b>
          <br />
          using one of&nbsp;the&nbsp;wallet below.
          Feel free to <Link href="/"> revisit the site</Link> to add more products.
          <br />
          After we receive the payment, you&amp;ll be redirected
          to our Telegram Bot for immediate access.
        </p>

        <div className={styles.statusWrapper}>
          <h2 className={styles.title2}>Status:</h2>
          <p
            className={clsx({
              [styles.status]: true,
              [styles.statusWaiting]: status === 'waiting',
              [styles.statusPaid]: status === 'paid',
              [styles.statusExpired]: status === 'expired',
            })}
          >
            {status}
          </p>
        </div>

        {walletEth && (
          <div className={styles.wallet}>
            <h2 className={styles.title2}>USDT (TRC20):</h2>
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
            <h2 className={styles.title2}>USDT (ERC20):</h2>
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

        <h2 className={styles.title2}>
          Access Granted To:
        </h2>
        <ul className={styles.productsList}>
          {products?.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>

        <div className={styles.price}>
          <h2 className={styles.title2}>Total Amount:</h2>
          <p className={styles.priceValue}>{price} USDT</p>
        </div>
      </div>
    </header>
  );
}
