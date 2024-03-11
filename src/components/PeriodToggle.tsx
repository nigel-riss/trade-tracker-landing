import durations from '@/data/duration';
import styles from '@/styles/PeriodToggle.module.scss';


interface PeriodToggleProps {
  onToggle: (selectedValue: string) => void;
  value: string;
}

export default function PeriodToggle(props: PeriodToggleProps) {
  const {
    onToggle,
    value,
  } = props;

  const valueIndex = durations.findIndex((duration) => duration.name === value);

  return (
    <div className={styles.toggle}>
      {durations.map((duration) => {
        const {
          name,
          title,
        } = duration;

        const isChecked = value === name;

        return (
          <div
            className={styles.option}
            key={name}
          >
            <input
              id={name}
              className={styles.input}
              type="checkbox"
              name="duration"
              value={name}
              checked={isChecked}
              onChange={() => onToggle(name)}
            />
            <label
              className={styles.label}
              htmlFor={name}
              key={name}
            >
              {title}
            </label>
          </div>
        );
      })}

      <div
        className={styles.track}
        style={{ left: `${valueIndex * 6.25 - 0.125}rem` }}
      />
    </div>
  );
}
