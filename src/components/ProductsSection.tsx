import styles from '@/styles/ProductsSection.module.scss';
import Title from './Title';
import Subtitle from './Subtitle';


interface ProductsSectionProps {
  
}

export default function ProductsSection(props: ProductsSectionProps) {
  const {
    
  } = props;

  return (
    <section
      id="products"
      className={styles.section}
    >
      <header className={styles.header}>
        <Title>Our products</Title>
        <Subtitle>
          Built by traders with years of experience, this Telegram bot offers
          at a glance what would normally take 10+ minutes of research.
        </Subtitle>
      </header>

      <div className={styles.content}>
        
      </div>
    </section>
  );
}
