import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import ProductsSection from '@/components/ProductsSection';
import SlidersSection from '@/components/SlidersSection';


export default function Home() {
  return (
    <main>
      <Header />
      <ProductsSection />
      <SlidersSection />
      <PricingSection />
    </main>
  );
}
