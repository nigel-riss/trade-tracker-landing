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
          Got Questions?
          <br />
          Our Expert Support Team is Here to Help You Navigate
          Through Your Queries
        </Subtitle>
        <ArrowLink
          href="https://www.gitbook.com/"
          text="Learn more"
        />
      </header>

      <div className={styles.content}>
        <FAQ />
      </div>
    </section>
  );
}
