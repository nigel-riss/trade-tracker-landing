import { Slide } from '@/data/products';
import styles from '@/styles/IPhone.module.scss';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import TGDoc from './TGDoc';
import Message from './Message';


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

  return (
    <div className={styles.iphone}>
      <div className={styles.screenWrapper}>
        <div
          className={styles.screen}
          style={extraStyles}
        >
          <div className={styles.badge}>/Start</div>
          <div className={styles.wrapper}>
            {slides?.map((slide, index) => (
              <Message
                isCurrent={currentIndex === index}
                key={slide.title}
              >
                {('text' in slide.message) && (
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {slide.message.text}
                  </Markdown>
                )}
                {('docs' in slide.message) && (
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
                )}
              </Message>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.frame} />
    </div>
  );
}
