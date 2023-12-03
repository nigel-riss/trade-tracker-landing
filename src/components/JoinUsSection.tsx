import styles from '@/styles/JoinUsSection.module.scss';
import social from '@/data/social';
import SocialSprites from './SocialSprites';
import Title from './Title';
import SocialButton from './SocialButton';


export default function JoinUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sprites}>
        <SocialSprites />
      </div>

      <header
        className={styles.header}
        data-aos="fade-up"
      >
        <Title>Join us</Title>
      </header>

      <div className={styles.content}>
        {social.map((it, index) => {
          const {
            id,
            href,
            width,
            height,
          } = it;

          return (
            <SocialButton
              key={id}
              id={id}
              href={href}
              width={width}
              height={height}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
