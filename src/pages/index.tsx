import FAQSection from '@/components/FAQSection';
import products from '@/data/products';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JoinUsSection from '@/components/JoinUsSection';
import PricingSection from '@/components/PricingSection';
import ProductsSection from '@/components/ProductsSection';
import SliderSection from '@/components/SliderSection';


export default function Home() {
  return (
    <main>
      <Header />
      <ProductsSection
        products={products}
      />
      <SliderSection
        products={products}
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
