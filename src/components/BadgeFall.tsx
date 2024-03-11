import styles from '@/styles/BadgeFall.module.scss';
import Badge from './Badge';


// const getBadges = (count: number) => (
//   <>
//     {[...Array(count)].map((_, i) => getBadge(`/${badges[i]}`))}
//   </>
// );


export default function BadgeFall() {
  return (
    <div className={styles.fall}>
      <div className={styles.back}>
        <Badge
          title="Trade"
          speedModifier={1.5}
        />
        <Badge
          title="Buy"
          speedModifier={1.5}
        />
        <Badge
          title="Sell"
          speedModifier={1.5}
        />
        <Badge
          title="Start"
          speedModifier={1.5}
        />
        <Badge
          title="Profit"
          speedModifier={1.5}
        />
      </div>
      <div className={styles.middle}>
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
        <Badge
          title="Start"
          speedModifier={1}
        />
        <Badge
          title="Profit"
          speedModifier={1}
        />
      </div>
      <div className={styles.front}>
        <Badge
          title="Trade"
          speedModifier={0.5}
        />
        <Badge
          title="Buy"
          speedModifier={0.5}
        />
        <Badge
          title="Sell"
          speedModifier={0.5}
        />
        <Badge
          title="Start"
          speedModifier={0.5}
        />
        <Badge
          title="Profit"
          speedModifier={0.5}
        />
      </div>
    </div>
  );
}
