import styles from '@/styles/ArrowLink.module.scss';
import Link from 'next/link';


interface ArrowLinkProps {
  href: string;
  text: string;
}

export default function ArrowLink(props: ArrowLinkProps) {
  const {
    href,
    text,
  } = props;

  return (
    <Link
      className={styles.link}
      href={href}
    >
      {text}
    </Link>
  );
}
