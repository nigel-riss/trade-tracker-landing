import styles from '@/styles/TGDoc.module.scss';
import Icon from '@/assets/icons/tg-doc.svg';


interface TGDocProps {
  fileName: string;
  fileSizeKB: number;
  time: string;
}

export default function TGDoc(props: TGDocProps) {
  const {
    fileName,
    fileSizeKB,
    time,
  } = props;

  return (
    <article className={styles.doc}>
      <div className={styles.icon}><Icon /></div>
      <header className={styles.header}>
        <h3 className={styles.name}>{fileName}</h3>
        <div className={styles.sizeNTime}>
          <p className={styles.size}>
            {fileSizeKB}
            &nbsp;KB
          </p>
          <p className={styles.time}>{time}</p>
        </div>
      </header>
    </article>
  );
}
