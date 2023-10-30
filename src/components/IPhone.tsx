import styles from '@/styles/IPhone.module.scss';


interface IPhoneProps {
  
}

export default function IPhone(props: IPhoneProps) {
  const {
    
  } = props;

  return (
    <div className={styles.iphone}>
      <div className={styles.frame} />
      IPhone
    </div>
  );
}
