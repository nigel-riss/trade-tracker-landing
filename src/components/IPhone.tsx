import { Slide } from '@/data/products';
import styles from '@/styles/IPhone.module.scss';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import TGDoc from './TGDoc';


interface IPhoneProps {
  currentIndex: number;
  slides?: Slide[];
}

export default function IPhone(props: IPhoneProps) {
  const {
    currentIndex,
    slides,
  } = props;

  const TABLE_QUERY = '(min-width: 600px)';
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(TABLE_QUERY);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, []);

  const extraStyles = matches
    ? { transform: `translateY(${slides?.[currentIndex]?.message.offset}em)` }
    : {};
  const fadeAnimation = matches
    ? 'fade-left'
    : '';

  return (
    <div
      className={styles.iphone}
      data-aos={fadeAnimation}
    >
      <div className={styles.screenWrapper}>
        <div
          className={styles.screen}
          style={extraStyles}
        >
          <div className={styles.badge}>/Start</div>
          <div className={styles.wrapper}>
            {slides?.map((slide, index) => {
              if ('text' in slide.message) {
                return (
                  <div
                    className={clsx({
                      [styles.message]: true,
                      [styles.messageCurrent]: currentIndex === index,
                    })}
                    key={slide.message.text}
                  >
                    <Markdown remarkPlugins={[remarkGfm]}>
                      {slide.message.text}
                    </Markdown>
                  </div>
                );
              }
              if ('docs' in slide.message) {
                return (
                  <div
                    className={clsx({
                      [styles.message]: true,
                      [styles.messageCurrent]: currentIndex === index,
                    })}
                    key={slide.message.offset}
                  >
                    {
                      slide.message.docs.map(({
                        fileName,
                        fileSizeKB,
                        time,
                      }) => (
                        <TGDoc
                          fileName={fileName}
                          fileSizeKB={fileSizeKB}
                          time={time}
                          key={fileName}
                        />
                      ))
                    }
                  </div>
                );
              }
              return false;
            })}
          </div>
        </div>
      </div>
      <div className={styles.frame} />
    </div>
  );
}
