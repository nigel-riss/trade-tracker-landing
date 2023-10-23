import styles from '@/styles/FAQSection.module.scss';
import Title from './Title';
import Subtitle from './Subtitle';
import ArrowLink from './ArrowLink';
import FAQ from './FAQ';


export default function FAQSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title>FAQs</Title>
        <Subtitle>
          For further enquiries, reach out to our support team
        </Subtitle>
        <ArrowLink
          href="#"
          text="Learn more"
        />
      </header>

      <div className={styles.content}>
        <FAQ />
      </div>
    </section>
  );
}
