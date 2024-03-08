/* eslint-disable consistent-return */
import CheckoutHeader from '@/components/CheckoutHeader';
import SimpleFooter from '@/components/SimpleFooter';
import API from '@/utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


interface InvoiceStatus {
  userName: string,
  validUntil?: Date | null,
  walletEth?: string | null,
  walletTrc?: string | null,
  products?: string[],
  status?: 'expired' | 'waiting' | 'paid',
  price?: number,
}


export default function Home() {
  const router = useRouter();
  const { invoiceId } = router.query;

  const [invoiceStatus, setInvoiceStatus]: [InvoiceStatus, any] = useState({
    userName: 'username',
    validUntil: null,
    walletEth: '0x0',
    walletTrc: '0x1',
    products: [],
    status: 'waiting',
    price: 0,
  });

  // let requestInterval: any = null;
  useEffect(() => {
    const getInvoiceStatus = async () => {
      console.log(invoiceId);
      if (!invoiceId) { return; }
      // return;
      const response = await fetch(
        `${API.STATUS_ENDPOINT}${invoiceId}`,
      );
      const data = await response.json();
      setInvoiceStatus({
        userName: data.TgUser as string,
        walletEth: data.WalletEth as string,
        walletTrc: data.WalletTrc as string,
        products: data.Products as string[],
        status: data.Status as string,
        price: +data.Amount as number,
      });
    };

    // if (requestInterval !== null) { return; }
    const requestInterval = window.setInterval(
      () => {
        console.log('hello');
        getInvoiceStatus();
      },
      3000,
    );

    return () => {
      window.clearInterval(requestInterval);
      // requestInterval = null;
    };
  }, [router.isReady, invoiceId]);

  return (
    <main>
      <CheckoutHeader
        userName={invoiceStatus.userName}
        walletEth={invoiceStatus.walletEth}
        walletTrc={invoiceStatus.walletTrc}
        products={invoiceStatus.products}
        price={invoiceStatus.price}
      />

      {/* <CheckoutCalculator
        periodName="three"
        products={products}
      /> */}

      <SimpleFooter />
    </main>
  );
}
