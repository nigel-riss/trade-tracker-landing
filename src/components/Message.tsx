import styles from '@/styles/Message.module.scss';
import clsx from 'clsx';


interface MessageProps {
  children: React.ReactNode;
  isCurrent?: boolean;
}


export default function Message(props: MessageProps) {
  const {
    children,
    isCurrent = false,
  } = props;

  return (
    <div
      className={clsx({
        [styles.message]: true,
        [styles.messageCurrent]: isCurrent,
      })}
    >
      {children}
    </div>
  );
}
