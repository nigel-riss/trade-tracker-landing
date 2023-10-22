import styles from '@/styles/Title.module.scss';


interface TitleProps {
  children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  const { children } = props;

  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  );
}
