import styles from '@/styles/IPhone.module.scss';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


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
    <div
      className={styles.iphone}
      data-aos="fade-left"
    >
      <div className={styles.screen}>
        <div className={styles.badge}>/Start</div>
        <div className={styles.wrapper}>
          {messages?.map((message) => (
            <div
              className={clsx({
                [styles.message]: true,
                [styles.messageCurrent]:
                  currentIndex === messages.indexOf(message),
              })}
              key={message}
            >
              <Markdown remarkPlugins={[remarkGfm]}>
                {message}
              </Markdown>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.frame} />
    </div>
  );
}
