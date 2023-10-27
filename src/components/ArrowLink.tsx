import styles from '@/styles/ArrowLink.module.scss';
import Link from 'next/link';
import ArrowIcon from '@/assets/icons/arrow.svg';


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
      <ArrowIcon className={styles.icon} />
    </Link>
  );
}
