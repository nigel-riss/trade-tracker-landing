import styles from '@/styles/SocialButton.module.scss';
import Link from 'next/link';


interface SocialButtonProps {
  id: string;
  href: string;
}

export default function SocialButton(props: SocialButtonProps) {
  const {
    id,
    href,
  } = props;

  return (
    <Link
      className={styles.link}
      href={href}
    >
      <svg className={styles.icon}>
        <use xlinkHref={`#${id}`} />
      </svg>
    </Link>
  );
}
