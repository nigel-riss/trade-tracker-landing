import { useEffect, useState } from 'react';
import styles from '@/styles/Badge.module.scss';
import { get } from 'http';


interface BadgeProps {
  title: string;
  speedModifier: number;
}

const BASE_ANIMATION_DURATION = 10;

const getRandomLeftPos = () => `${Math.random() * 80 + 10}%`;
const getRandomDelay = () => `${Math.random() * BASE_ANIMATION_DURATION}s`;
const getRandomDirection = () => (Math.random() > 0.5 ? 'normal' : 'reverse');
const getRandomDuration = (speedModifier: number) => `${
  (Math.random() * BASE_ANIMATION_DURATION * speedModifier)
  / BASE_ANIMATION_DURATION
  + BASE_ANIMATION_DURATION * speedModifier
}s`;


export default function Badge(props: BadgeProps) {
  const {
    title,
    speedModifier = 1,
  } = props;

  const [leftPos, setLeftPos] = useState(getRandomLeftPos());
  const [animationDelay, setAnimationDelay] = useState('1s');
  const [animationDirection, setAnimationDirection] = useState('normal');
  const [animationDuration, setAnimationDuration] = useState('10s');

  useEffect(() => {
    setLeftPos(getRandomLeftPos());
    setAnimationDelay(getRandomDelay());
    setAnimationDirection(getRandomDirection());
    setAnimationDuration(getRandomDuration(speedModifier));
  }, []);

  const cssStyles = {
    animationDuration: `
      ${animationDuration},
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
