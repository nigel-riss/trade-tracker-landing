/* eslint-disable consistent-return */
import CheckoutCalculator from '@/components/CheckoutCalculator';
import CheckoutHeader from '@/components/CheckoutHeader';
import SimpleFooter from '@/components/SimpleFooter';
import products from '@/data/products';
import API from '@/utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


interface InvoiceStatus {
  userName: string,
  validUntil?: Date | null,
  walletEth?: string | null,
  walletTrc?: string | null,
}


export default function Home() {
  const { invoiceId } = useRouter().query;
  const [invoiceStatus, setInvoiceStatus]: [InvoiceStatus, any] = useState({
    userName: 'username1',
    validUntil: null,
    walletEth: null,
    walletTrc: null,
  });

  const getInvoiceStatus = async () => {
    if (!invoiceId) { return; }
    const response = await fetch(
      `${API.STATUS_ENDPOINT}${invoiceId}`,
    );
    const data = await response.json();
    setInvoiceStatus({
      userName: data.TgUser as string,
      walletEth: data.WalletEth as string,
      walletTrc: data.WalletTrc as string,
    });
  };

  // let requestInterval: any = null;
  useEffect(() => {
    // if (requestInterval !== null) { return; }
    const requestInterval = window.setInterval(
      () => {
        console.log('hello');
        getInvoiceStatus();
      },
      1000,
    );

    return () => {
      window.clearInterval(requestInterval);
      // requestInterval = null;
    };
  }, []);

  return (
    <main>
      <CheckoutHeader
        userName={invoiceStatus.userName}
        walletEth={invoiceStatus.walletEth}
        walletTrc={invoiceStatus.walletTrc}
      />

      <CheckoutCalculator
        periodName="three"
        products={products}
      />

      <SimpleFooter />
    </main>
  );
}
