import styles from '@/styles/Slider.module.scss';
import IPhone from './IPhone';


interface SliderProps {
  
}

export default function Slider(props: SliderProps) {
  const {
    
  } = props;

  return (
    <div className={styles.slider}>
      Slider
      <div className={styles.phoneContainer}>
        <IPhone />
      </div>
    </div>
  );
}
