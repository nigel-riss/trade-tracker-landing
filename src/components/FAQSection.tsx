import styles from '@/styles/FAQSection.module.scss';
import Title from './Title';
import Subtitle from './Subtitle';
import ArrowLink from './ArrowLink';


interface FAQSectionProps {
  
}

export default function FAQSection(props: FAQSectionProps) {
  const {
    
  } = props;

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
    </section>
  );
}
