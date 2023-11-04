'';

import styles from '@/styles/BadgeFall.module.scss';
import badges from '@/data/badges';
import Badge from './Badge';


interface BadgeFallProps {
  amount: number;
}


// const getBadges = (count: number) => (
//   <>
//     {[...Array(count)].map((_, i) => getBadge(`/${badges[i]}`))}
//   </>
// );


export default function BadgeFall(props: BadgeFallProps) {
  const { amount } = props;

  return (
    <div className={styles.fall}>
      <div className={styles.back}>
        <Badge
          title="Trade"
          speedModifier={1}
        />
        <Badge
          title="Buy"
          speedModifier={1}
        />
        <Badge
          title="Sell"
          speedModifier={1}
        />
      </div>
      <div className={styles.middle}>
        {}
      </div>
      <div className={styles.front}>
        {}
      </div>
    </div>
  );
}
