import styles from '@/styles/BotCard.module.scss';
import { clsx } from 'clsx';
import Link from 'next/link';


interface BotCardProps {
  botID: string,
  title: string,
  subtitle: string,
  iconHeight: number,
  iconWidth: number,
  isComingSoon?: boolean,
}

export default function BotCard(props: BotCardProps) {
  const {
    botID,
    title,
    subtitle,
    iconHeight,
    iconWidth,
    isComingSoon = false,
  } = props;

  return (
    <article
      className={clsx({
        [styles.card]: true,
        [styles.isComingSoon]: isComingSoon,
      })}
    >
      <Link
        className={styles.link}
        href={`#${botID}`}
      >
        <svg
          className={styles.icon}
          viewBox={`0 0 ${iconWidth} ${iconHeight}`}
        >
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
