import styles from '@/styles/PolicySection.module.scss';


interface PolicySectionProps {
  children?: React.ReactNode;
}

export default function PolicySection(props: PolicySectionProps) {
  const {
    children,
  } = props;

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
