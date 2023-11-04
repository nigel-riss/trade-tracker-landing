import { useEffect, useState } from 'react';
import styles from '@/styles/Badge.module.scss';


interface BadgeProps {
  title: string;
  speedModifier: number;
}

const BASE_ANIMATION_DURATION = 10;

const getRandomLeftPos = () => `${Math.random() * 80 + 10}%`;


export default function Badge(props: BadgeProps) {
  const {
    title,
    speedModifier = 1,
  } = props;

  const [leftPos, setLeftPos] = useState(getRandomLeftPos());
  const [animationDelay, setAnimationDelay] = useState('1s');
  const [animationDirection, setAnimationDirection] = useState('normal');
  // const [speed, setSpeed] = useState(1);

  useEffect(() => {
    setLeftPos(getRandomLeftPos());
    setAnimationDelay(`${Math.random() * 5 + 1}s`);
    setAnimationDirection(Math.random() > 0.5 ? 'normal' : 'reverse');
  }, []);

  const cssStyles = {
    animationDuration: `
      10s,
      10s
    `,
    animationDelay,
    animationDirection: `
      normal,
      ${animationDirection}
    `,
    // top: `${topPos}%`,
    left: leftPos,
  };

  return (
    <div
      className={styles.badge}
      style={cssStyles}
      onAnimationIteration={(e) => {
        if (e.animationName === styles.drop) {
          setLeftPos(getRandomLeftPos());
        }
      }}
    >
      /
      {title}
    </div>
  );
}
