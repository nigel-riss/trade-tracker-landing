import styles from '@/styles/InvoiceStatus.module.scss';
import API from '@/utils/api';
import Cookies from '@/utils/cookies';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


interface InvoiceStatusProps {
  status: string ;
}

export default function InvoiceStatus(props: InvoiceStatusProps) {
  const {
    status,
  } = props;

  const router = useRouter();
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    if (!router.isReady) { return; }
    setRedirectUrl(API.CHECKOUT_ENDPOINT + Cookies.getQuery());

    // if (status === 'paid') {
    //   router.push('/');
    // }
  }, [status, router, router.isReady]);

  return (
    <div
      className={clsx({
        [styles.status]: true,
        [styles.statusPaid]: status === 'paid',
        [styles.statusExpired]: status === 'expired',
      })}
    >
      <h1 className={styles.title}>Payment status:</h1>
      <p className={styles.badge}>{status}</p>
      <p className={styles.text}>
        {status === 'paid' && 'Now you will be redirected to your telegram bot.'}
        {status === 'expired' && 'You can select products and try again'}
      </p>
      <p className={styles.text}>
        {status === 'paid' && (
          <Link href={redirectUrl}>
            Or you can use this link
          </Link>
        )}
        {status === 'expired' && (
          <Link href="/#pricing">Return to the site</Link>
        )}
      </p>
    </div>
  );
}
