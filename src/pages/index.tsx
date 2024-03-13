import FAQSection from '@/components/FAQSection';
import products from '@/data/products';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JoinUsSection from '@/components/JoinUsSection';
import PricingSection from '@/components/PricingSection';
import ProductsSection from '@/components/ProductsSection';
import SliderSection from '@/components/SliderSection';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from '@/utils/cookies';


export default function Home() {
  const router = useRouter();

  const [currentProductId, setCurrentProductId] = useState(products[0].id);

  useEffect(() => {
    if (!router.isReady) { return; }

    Cookies.checkAndSave(router.query);
  }, [router.isReady, router.query]);

  return (
    <main>
      <Header />
      <ProductsSection
        products={products}
        productClickHandler={(id: string) => setCurrentProductId(id)}
      />
      <SliderSection
        products={products}
        currentProductId={currentProductId}
        onProductChange={(id: string) => setCurrentProductId(id)}
      />
      <PricingSection
        products={products}
      />
      <FAQSection />
      <JoinUsSection />
      <Footer />
    </main>
  );
}
