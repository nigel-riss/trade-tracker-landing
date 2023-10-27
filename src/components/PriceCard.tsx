'use client';

import { Feature } from '@/data/products';
import styles from '@/styles/PriceCard.module.scss';
import PriceButton from './PriceButton';


interface PriceCardProps {
  title: string;
  subtitle: string;
  features: Feature[];
  price: number;
}

export default function PriceCard(props: PriceCardProps) {
  const {
    title,
    subtitle,
    features,
    price,
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
                <span className={styles.featureValue}>{value}</span>
                <span className={styles.featureTitle}>{featureTitle}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.price}>
        <PriceButton
          value={price}
          onClick={() => {}}
        />
      </div>
    </article>
  );
}
