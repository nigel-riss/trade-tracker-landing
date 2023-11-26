import styles from '@/styles/IPhone.module.scss';
import clsx from 'clsx';


interface IPhoneProps {
  currentIndex: number;
  messages?: string[];
}

export default function IPhone(props: IPhoneProps) {
  const {
    currentIndex,
    messages,
  } = props;

  return (
    <div className={styles.iphone}>
      <div className={styles.screen}>
        <div className={styles.badge}>/Start</div>
        <div className={styles.wrapper}>
          {messages?.map((message) => (
            <p
              className={clsx({
                [styles.message]: true,
                [styles.messageCurrent]:
                  currentIndex === messages.indexOf(message),
              })}
              key={message}
            >
              {message}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.frame} />
    </div>
  );
}
