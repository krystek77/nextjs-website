import styles from './HygieneBarrier.module.css';
import Title from '../../components/Title/Title';
import LinkButton from '../../components/LinkButton/LinkButton';
import Image from 'next/image';

function HygieneBarrier() {
  return (
    <section className={styles.hygieneBarrier}>
      <Image
        src="/assets/images/bg_hygiene_barrier.webp"
        alt="bariera higieny"
        layout="fill"
      />
      <Title
        content="Skuteczna ochrona przed przenoszeniem zakażeń i bakteriami"
        variant="h1"
        classes="title_light_500 title_center title_maxWidth_960"
      />
      <LinkButton label="Idea pralni z barierą higieny" to="/bariera-higieny" />
    </section>
  );
}

export default HygieneBarrier;
