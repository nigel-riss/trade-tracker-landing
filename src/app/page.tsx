import FAQSection from '@/components/FAQSection';
import products from '@/data/products';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JoinUsSection from '@/components/JoinUsSection';
import PricingSection from '@/components/PricingSection';
import ProductsSection from '@/components/ProductsSection';
import SlidersSection from '@/components/SlidersSection';
import SpecialOffer from '@/components/SpecialOffer';


export default function Home() {
  return (
    <main>
      <Header />
      <ProductsSection
        products={products}
      />
      <SlidersSection
        products={products}
      />
      <PricingSection
        products={products}
      />
      <SpecialOffer />
      <FAQSection />
      <JoinUsSection />
      <Footer />
    </main>
  );
}
