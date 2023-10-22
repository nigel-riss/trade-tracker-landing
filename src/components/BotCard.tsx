import styles from '@/styles/BotCard.module.scss';
import Link from 'next/link';


interface BotCardProps {
  botID: string,
  title: string,
  description: string,
}

export default function BotCard(props: BotCardProps) {
  const {
    botID,
    title,
    description,
  } = props;

  return (
    <article className={styles.card}>
      <svg className={styles.icon}>
        <use xlinkHref={`#${botID}-icon`} />
      </svg>
      <Link
        className={styles.link}
        href={`#${botID}`}
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </Link>
    </article>
  );
}
