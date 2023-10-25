import styles from '@/styles/SocialButton.module.scss';
import Link from 'next/link';


interface SocialButtonProps {
  id: string;
  href: string;
  width: number;
  height: number;

}

export default function SocialButton(props: SocialButtonProps) {
  const {
    id,
    href,
    width,
    height,
  } = props;

  return (
    <Link
      className={styles.link}
      href={href}
    >
      <svg
        className={styles.icon}
        viewBox={`0 0 ${width} ${height}`}
      >
        <use xlinkHref={`#${id}`} />
      </svg>
    </Link>
  );
}
