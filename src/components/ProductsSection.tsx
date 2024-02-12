import styles from '@/styles/ProductsSection.module.scss';
import { Product } from '@/data/products';
import ProductsSprites from '@/components/ProductSprites';
import Title from './Title';
import Subtitle from './Subtitle';
import BotCard from './BotCard';


interface ProductsSectionProps {
  products: Product[];
}

export default function ProductsSection(props: ProductsSectionProps) {
  const { products } = props;

  return (
    <section className={styles.section}>
      <a href="#products" id="products" className={styles.anchor}>Products</a>
      <div className={styles.sprites}>
        <ProductsSprites />
      </div>

      <header
        className={styles.header}
        data-aos="fade-up"
      >
        <Title>Our products</Title>
        <Subtitle>
          From the minds of experts in big data, trading, and business
          innovation, our product range is&nbsp;a&nbsp;testament to years
          of&nbsp;mastery and success. Imagine replacing an entire
          team of&nbsp;analysts and&nbsp;developers with our tools, each
          engineered to deliver rapid, detailed insights into
          the&nbsp;trading&nbsp;world
        </Subtitle>
      </header>

      <div className={styles.content}>
        {products.map((product: Product, index) => {
          const {
            id,
            title,
            description,
            icon,
            isComingSoon,
          } = product;

          return (
            <BotCard
              key={id}
              botID={id}
              title={title}
              subtitle={description}
              iconHeight={icon.height}
              iconWidth={icon.width}
              isComingSoon={isComingSoon}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
