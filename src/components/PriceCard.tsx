/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'';

import { Feature } from '@/data/products';
import styles from '@/styles/PriceCard.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import PriceButton from './PriceButton';


interface PriceCardProps {
  id: string;
  isInCart: boolean;
  title: string;
  subtitle: string;
  features: Feature;
  price: number;
  onPriceClick: (id: string) => void;
}

export default function PriceCard(props: PriceCardProps) {
  const {
    id,
    isInCart,
    title,
    subtitle,
    features,
    price,
    onPriceClick,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={clsx({
        [styles.card]: true,
        [styles.isOpen]: isOpen,
        [styles.isInCart]: isInCart,
      })}
    >
      <div className={styles.header}>
        <h3
          className={styles.title}
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </h3>
        <div className={styles.price}>
          <PriceButton
            value={price}
            onClick={() => onPriceClick(id)}
            isActive={isInCart}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <div
          className={styles.features}
          dangerouslySetInnerHTML={{ __html: features.pro }}
        />
        <div className={styles.priceBottom}>
          <PriceButton
            value={price}
            onClick={() => onPriceClick(id)}
            isActive={isInCart}
          />
        </div>
      </div>
    </article>
  );
}
