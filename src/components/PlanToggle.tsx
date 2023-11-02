/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from '@/styles/PlanToggle.module.scss';
import clsx from 'clsx';
import { useMemo } from 'react';


interface PlanToggleProps {
  onToggle: () => void;
  isChecked: boolean;
}

let uniqueId = 0;
const generateUniqueId = () => {
  uniqueId += 1;
  return `toggle-${uniqueId}`;
};


export default function PlanToggle(props: PlanToggleProps) {
  const {
    onToggle,
    isChecked,
  } = props;

  const inputId = useMemo(() => generateUniqueId(), []);

  return (
    <div
      className={clsx({
        [styles.toggle]: true,
        [styles.isChecked]: isChecked,
      })}
    >
      <h4 className={styles.title}>Pro</h4>
      <input
        id={inputId}
        className={styles.input}
        type="checkbox"
        checked={isChecked}
        onChange={() => onToggle()}
      />
      <label
        htmlFor={inputId}
        className={styles.label}
      >
        <span className={styles.slider} />
      </label>
    </div>
  );
}
