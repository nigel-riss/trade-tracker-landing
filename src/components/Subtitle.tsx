import styles from '@/styles/Subtitle.module.scss';


interface SubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle(props: SubtitleProps) {
  const { children } = props;

  return (
    <p className={styles.subtitle}>{children}</p>
  );
}
