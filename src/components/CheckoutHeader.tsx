/* eslint-disable react/jsx-one-expression-per-line */
import styles from '@/styles/Header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from './Logo';
import MainMenu from './MainMenu';
import CopyIcon from '../assets/icons/copy.svg';
import Preloader from './Preloader';
import InvoiceStatus from './InvoiceStatus';
import ProgressIcon from '../assets/progress-yellow.svg';
import CountdownTimer from './CountdownTimer';


interface CheckoutHeaderProps {
  userName: string;
  validUntil?: string | null;
  walletEth?: string | null;
  walletTrc?: string | null;
  products?: string[],
  status?: string,
  price?: number,
}


export default function CheckoutHeader(props: CheckoutHeaderProps) {
  const {
    userName,
    validUntil,
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
        {!userName && <Preloader />}

        {userName && (status === 'waiting') && (
          <div className={styles.invoice}>
            <h1 className={styles.greeting}>
              Hi,
              <em>@{userName}</em>
            </h1>
            <p className={styles.text}>
              To complete your subscription, please send the payment within
              <CountdownTimer date={validUntil || ''} />
              <br />
              using one of&nbsp;the&nbsp;wallet below.
              Feel free to <Link href="/"> revisit the site</Link> to add more products.
              <br />
              After we receive the payment, you&apos;ll be redirected
              to our Telegram Bot for&nbsp;immediate access.
            </p>

            <div className={styles.statusWrapper}>
              <h2 className={styles.title2}>Status:</h2>
              <p
                className={clsx({
                  [styles.status]: true,
                  [styles.statusWaiting]: status === 'waiting',
                  // [styles.statusPaid]: status === 'paid',
                  // [styles.statusExpired]: status === 'expired',
                })}
              >
                {status}
                <ProgressIcon />
              </p>
            </div>

            {walletTrc && (
              <div className={styles.wallet}>
                <h2 className={styles.title2}>USDT (TRC20):</h2>
                <button
                  className={styles.copyCode}
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(walletTrc);
                  }}
                >
                  {walletEth}
                  <CopyIcon />
                </button>
              </div>
            )}
            {walletEth && (
              <div className={styles.wallet}>
                <h2 className={styles.title2}>USDT (ERC20):</h2>
                <button
                  className={styles.copyCode}
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(walletEth);
                  }}
                >
                  {walletTrc}
                  <CopyIcon />
                </button>
              </div>
            )}

            <div className={styles.access}>
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
          </div>
        )}

        {userName && status && (status !== 'waiting') && (
          <InvoiceStatus status={status} />
        )}
      </div>
    </header>
  );
}
