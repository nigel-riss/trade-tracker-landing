import clsx from 'clsx';
import styles from '@/styles/NavButton.module.scss';
import React from 'react';


interface LeftButtonProps {
  clickHandler?: () => void;
}

const LeftButton = React.forwardRef<HTMLButtonElement, LeftButtonProps>(
  (props, ref) => {
    const {
      clickHandler,
    } = props;

    return (
      <button
        className={clsx({
          [styles.button]: true,
          [styles.buttonLeft]: true,
        })}
        type="button"
        ref={ref}
        onClick={clickHandler}
      >
        <svg
          viewBox="0 0 100 100"
          x="0px"
          y="0px"
          version="1.1"
        >
          <g transform="translate(10)">
            <polygon points="11.895,6 11.895,94 88.105,50" />
          </g>
        </svg>
      </button>
    );
  },
);

LeftButton.displayName = 'LeftButton';


export default LeftButton;
