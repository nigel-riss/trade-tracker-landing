import styles from '@/styles/FAQItem.module.scss';


interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem(props: FAQItemProps) {
  const {
    question,
    answer,
  } = props;

  return (
    <>
      <dt className={styles.question}>
        {question}
      </dt>
      <dd className={styles.answer}>
        {answer}
      </dd>
    </>
  );
}
