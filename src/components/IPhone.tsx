import { Slide } from '@/data/products';
import styles from '@/styles/IPhone.module.scss';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

  return (
    <div
      className={styles.iphone}
      data-aos="fade-left"
    >
      <div
        className={styles.screen}
        style={{
          transform: `translateY(${slides?.[currentIndex]?.message.offset}em)`,
        }}
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
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    disallowedElements={['-']}
                  >
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
      <div className={styles.frame} />
    </div>
  );
}
