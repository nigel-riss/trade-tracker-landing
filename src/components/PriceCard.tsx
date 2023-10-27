import { Feature } from '@/data/products';
import styles from '@/styles/PriceCard.module.scss';


interface PriceCardProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export default function PriceCard(props: PriceCardProps) {
  const {
    title,
    subtitle,
    features,
  } = props;

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <ul className={styles.featureList}>
          {features.map((feature: Feature) => {
            const {
              value,
              title: featureTitle,
            } = feature;

            return (
              <li
                key={featureTitle}
                className={styles.feature}
              >
                <b>{value}</b>
                <br />
                {featureTitle}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.price}>

      </div>
    </article>
  );
}
