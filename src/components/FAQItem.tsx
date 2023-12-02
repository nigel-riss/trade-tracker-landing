/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import styles from '@/styles/FAQItem.module.scss';
import clsx from 'clsx';
import { useState } from 'react';


interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem(props: FAQItemProps) {
  const {
    question,
    answer,
    index,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.item}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      onClick={() => setIsOpen(!isOpen)}
    >
      <dt className={styles.question}>
        ✽&nbsp;
        {question}
        <span
          className={clsx({
            [styles.arrow]: true,
            [styles.isOpen]: isOpen,
          })}
        />
      </dt>
      <dd
        className={clsx({
          [styles.answer]: true,
          [styles.isOpen]: isOpen,
        })}
      >
        {answer}
      </dd>
    </div>
  );
}
