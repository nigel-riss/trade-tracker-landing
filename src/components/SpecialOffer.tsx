'';

import styles from '@/styles/SpecialOffer.module.scss';
import ContactButton from './ContactButton';


export default function SpecialOffer() {
  return (
    <div
      className={styles.offer}
      data-aos="fade-down"
    >
      <h3 className={styles.title}>Special offer</h3>
      <div className={styles.button}>
        <ContactButton
          onClick={() => console.log('contact-button-clicked')}
        />
      </div>
    </div>
  );
}
