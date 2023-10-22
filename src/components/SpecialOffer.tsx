'use client';

import styles from '@/styles/SpecialOffer.module.scss';
import ContactButton from './ContactButton';


export default function SpecialOffer() {
  return (
    <div className={styles.offer}>
      <h3 className={styles.title}>Special offer</h3>
      <ContactButton
        onClick={() => console.log('contact-button-clicked')}
      />
    </div>
  );
}
