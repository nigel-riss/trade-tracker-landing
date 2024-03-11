import styles from '@/styles/BotCard.module.scss';
import { clsx } from 'clsx';
import Link from 'next/link';


interface BotCardProps {
  botID: string;
  title: string;
  subtitle: string;
  iconHeight: number;
  iconWidth: number;
  isComingSoon?: boolean;
  index: number;
  clickHandler: (id: string) => void;
}

export default function BotCard(props: BotCardProps) {
  const {
    botID,
    title,
    subtitle,
    iconHeight,
    iconWidth,
    isComingSoon = false,
    index,
    clickHandler,
  } = props;

  return (
    <article
      className={clsx({
        [styles.card]: true,
        [styles.isComingSoon]: isComingSoon,
      })}
      data-aos="fade-up"
      data-aos-delay={index * 100 + 300}
    >
      <Link
        className={styles.link}
        href="#slider"
        onClick={() => clickHandler(botID)}
      >
        <svg
          className={styles.icon}
          viewBox={`0 0 ${iconWidth} ${iconHeight}`}
        >
          <use xlinkHref={`#${botID}-icon`} />
        </svg>
        <div className={styles.caption}>
          <h3 className={styles.title}>{title}</h3>
          <p
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </Link>
    </article>
  );
}
