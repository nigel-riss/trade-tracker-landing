/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import styles from '@/styles/FAQItem.module.scss';
import clsx from 'clsx';
import { useState } from 'react';


interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem(props: FAQItemProps) {
  const {
    question,
    answer,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx({
        [styles.item]: true,
        [styles.isOpen]: isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <dt className={styles.question}>
        ✽&nbsp;
        {question}
        <span className={styles.arrow} />
      </dt>
      <dd className={styles.answer}>
        {answer}
      </dd>
    </div>
  );
}
