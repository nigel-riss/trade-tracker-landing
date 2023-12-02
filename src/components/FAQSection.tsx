import styles from '@/styles/FAQSection.module.scss';
import Title from './Title';
import Subtitle from './Subtitle';
import ArrowLink from './ArrowLink';
import FAQ from './FAQ';


export default function FAQSection() {
  return (
    <section
      id="faq"
      className={styles.section}
    >
      <header
        className={styles.header}
        data-aos="fade-right"
      >
        <Title><strong>FAQs</strong></Title>
        <Subtitle>
          For further enquiries,
          <br />
          reach out to our support team
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
