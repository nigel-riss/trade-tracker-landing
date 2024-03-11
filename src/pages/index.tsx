import FAQSection from '@/components/FAQSection';
import products from '@/data/products';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JoinUsSection from '@/components/JoinUsSection';
import PricingSection from '@/components/PricingSection';
import ProductsSection from '@/components/ProductsSection';
import SliderSection from '@/components/SliderSection';
import { useState } from 'react';


export default function Home() {
  const [currentProductId, setCurrentProductId] = useState(products[0].id);

  return (
    <main>
      <Header />
      <ProductsSection
        products={products}
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
