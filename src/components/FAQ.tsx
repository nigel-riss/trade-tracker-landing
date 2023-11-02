'use client';

import styles from '@/styles/FAQ.module.scss';
import faq from '@/data/faq';
import FAQItem from './FAQItem';


export default function FAQ() {
  return (
    <dl className={styles.faq}>
      {faq.map((it) => {
        const {
          id,
          question,
          answer,
        } = it;
        return (
          <FAQItem
            key={id}
            question={question}
            answer={answer}
          />
        );
      })}
    </dl>
  );
}
