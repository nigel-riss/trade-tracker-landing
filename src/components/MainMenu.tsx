'';

import styles from '@/styles/MainMenu.module.scss';
import MenuIcon from '@/assets/icons/menu.svg';
import menu, { MenuItem } from '@/data/menu';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';


export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx({
        [styles.menu]: true,
        [styles.isOpen]: isOpen,
      })}
    >
      <MenuIcon
        className={styles.icon}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className={styles.list}>
        {menu.map((item: MenuItem, i: number) => {
          const {
            id,
            title,
            href,
          } = item;

          return (
            <li
              key={id}
              className={styles.item}
              style={{ ['--index' as any]: `${i + 1}` }}
            >
              <Link
                className={styles.link}
                href={href}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
