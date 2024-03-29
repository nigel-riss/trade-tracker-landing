/* eslint-disable consistent-return */
import CheckoutHeader from '@/components/CheckoutHeader';
import SimpleFooter from '@/components/SimpleFooter';
import API from '@/utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


interface InvoiceStatus {
  userName: string,
  validUntil?: string | null,
  walletEth?: string | null,
  walletTrc?: string | null,
  products?: string[],
  status?: 'expired' | 'waiting' | 'paid',
  price?: number,
}


export default function Home() {
  const router = useRouter();
  const { invoiceId } = router.query;

  const [isOnceLoaded, setIsOnceLoaded] = useState(false);
  const [invoiceStatus, setInvoiceStatus]: [InvoiceStatus, any] = useState({
    userName: '',
    validUntil: null,
    walletEth: '0x0',
    walletTrc: '0x1',
    products: [],
    status: 'waiting',
    price: 0,
  });

  useEffect(() => {
    const getInvoiceStatus = async () => {
      if (!invoiceId) { return; }
      // return;
      // console.log(
      //   Cookies.getQuery(),
      // );

      const response = await fetch(
        `${API.STATUS_ENDPOINT}${invoiceId}`,
      );
      const data = await response.json();
      setInvoiceStatus({
        userName: data.TgUser as string,
        validUntil: data.Until as string,
        walletEth: data.WalletEth as string,
        walletTrc: data.WalletTrc as string,
        products: data.Products as string[],
        status: data.Status as string,
        price: +data.Amount as number,
      });
    };

    if (!isOnceLoaded) {
      getInvoiceStatus();
      setIsOnceLoaded(true);
    }

    // if (requestInterval !== null) { return; }
    const requestInterval = window.setInterval(
      () => getInvoiceStatus(),
      3000,
    );

    return () => {
      window.clearInterval(requestInterval);
    };
  }, [router.isReady, invoiceId, isOnceLoaded]);

  return (
    <main>
      <CheckoutHeader
        userName={invoiceStatus.userName}
        validUntil={invoiceStatus.validUntil}
        walletEth={invoiceStatus.walletEth}
        walletTrc={invoiceStatus.walletTrc}
        products={invoiceStatus.products}
        price={invoiceStatus.price}
        status={invoiceStatus.status}
      />

      {/* <CheckoutCalculator
        periodName="three"
        products={products}
      /> */}

      <SimpleFooter />
    </main>
  );
}
