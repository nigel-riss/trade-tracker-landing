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
    <section
      id="products"
      className={styles.section}
    >
      <div className={styles.sprites}>
        <ProductsSprites />
      </div>

      <header className={styles.header}>
        <Title>Our products</Title>
        <Subtitle>
          Built by traders with years of experience, this Telegram bot offers
          at a glance what would normally take 10+ minutes of research.
        </Subtitle>
      </header>

      <div className={styles.content}>
        {products.map((product: Product) => {
          const {
            id,
            title,
            subtitle,
            icon,
            isComingSoon,
          } = product;

          return (
            <BotCard
              key={id}
              botID={id}
              title={title}
              subtitle={subtitle}
              iconHeight={icon.height}
              iconWidth={icon.width}
              isComingSoon
            />
          );
        })}
      </div>
    </section>
  );
}
