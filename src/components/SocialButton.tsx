import styles from '@/styles/SocialButton.module.scss';
import Link from 'next/link';


interface SocialButtonProps {
  id: string;
  href: string;
  width: number;
  height: number;
  index: number;
}

export default function SocialButton(props: SocialButtonProps) {
  const {
    id,
    href,
    width,
    height,
    index,
  } = props;

  return (
    <Link
      className={styles.link}
      href={href}
      data-aos="fade-left"
      data-aos-delay={index * 100}
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
