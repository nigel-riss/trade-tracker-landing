import styles from '@/styles/CountdownTimer.module.scss';
import { useEffect, useState } from 'react';


interface CountdownTimerProps {
  date: string;
}

export default function CountdownTimer(props: CountdownTimerProps) {
  const {
    date,
  } = props;

  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeftMs = Date.parse(date) - Date.now();
      const minutesLeft = Math.floor(timeLeftMs / 1000 / 60);
      const secondsLeft = Math.floor((timeLeftMs / 1000) % 60);
      let timeLeftStr = (minutesLeft > 0) ? `${minutesLeft} minutes ` : '';
      timeLeftStr += `${secondsLeft} second`;
      timeLeftStr += (secondsLeft === 1) ? '.' : 's.';

      if (timeLeftMs <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft(timeLeftStr);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <b className={styles.timer}>
      <i> </i>
      {timeLeft}
    </b>
  );
}
