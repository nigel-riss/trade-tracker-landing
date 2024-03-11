import { Slide } from '@/data/products';
import styles from '@/styles/IPhone.module.scss';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


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
      <div className={styles.screen}>
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
            return false;
          })}
        </div>
      </div>
      <div className={styles.frame} />
    </div>
  );
}
