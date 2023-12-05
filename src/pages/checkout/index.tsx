import CheckoutCalculator from '@/components/CheckoutCalculator';
import CheckoutHeader from '@/components/CheckoutHeader';
import SimpleFooter from '@/components/SimpleFooter';
import products from '@/data/products';


export default function Home() {
  return (
    <main>
      <CheckoutHeader />

      <CheckoutCalculator
        periodName="three"
        products={products}
      />

      <SimpleFooter />
    </main>
  );
}
