import styles from '@/styles/BotCard.module.scss';
import Link from 'next/link';


interface BotCardProps {
  botID: string,
  title: string,
  subtitle: string,
}

export default function BotCard(props: BotCardProps) {
  const {
    botID,
    title,
    subtitle,
  } = props;

  return (
    <article className={styles.card}>
      <Link
        className={styles.link}
        href={`#${botID}`}
      >
        <svg className={styles.icon}>
          <use xlinkHref={`#${botID}-icon`} />
        </svg>
        <div className={styles.caption}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Link>
    </article>
  );
}
