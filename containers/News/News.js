import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import LinkButton from '../../components/LinkButton/LinkButton';

import styles from './News.module.css';

const newsData = [
  {
    id: 1,
    image: 'news_01',
    date: new Date(2021, 11, 20),
    title: 'Ponad 3500 mopów dziennie z urządzeniami Primus',
    info: 'As a long-term partner, Primus assessed Katzer GmbH in the product selection and the implementation of this project. The installation of the devices was then taken over by our Primus distributor, Penderok',
    content: '',
  },
  {
    id: 2,
    image: 'news_02',
    date: new Date(2022, 0, 25),
    title: 'Większe możliwości i lepsze warunki pracy',
    info: 'Our PRIMUS experts worked with l’ESAT du Rangen for the new reorganization of their laundry that had become obsolete. This project is a nice example of a modern, ergonomic laundry redesigned taking the expectations of the management and the handicapped workers into accoun',
    content: '',
  },
  {
    id: 3,
    image: 'news_03',
    date: new Date(2022, 0, 20),
    title: 'Bardziej ergonomiczne, wydajne i oszczędne',
    info: 'PRIMUS efficient and less energy-consuming laundry renovation was made in the ESAT de la Bièvre a center based in France that promotes the social and professional autonomy, integration, and reintegration of people with disabilities',
    content: '',
  },
];

function News() {
  return (
    <section className={styles.news}>
      <header className={styles.news__header}>
        <Subtitle content="Aktualności ze świata Pralmy" />
        <Title content="Ostatenie wiadomości" />
      </header>
      <div className={styles.news__container}>
        {newsData.length
          ? newsData.map((item, index) => {
              return (
                <div key={index} className={styles.news__item}>
                  <div className={styles.news__image}>
                    <Image
                      src={`/assets/images/${item.image}.png`}
                      alt={item.title}
                      width="426"
                      height="320"
                    />
                  </div>
                  <div className={styles.news__content}>
                    <span className={styles.news__date}>
                      {item.date.toLocaleDateString()}
                    </span>
                    <Title content={item.title} variant="h3" />
                    <Description
                      content={item.info}
                      classes="description_18 description_mb_2"
                    />
                    <LinkButton
                      label="Przeczytaj"
                      to={`/wiadomosci/${encodeURIComponent(item.id)}`} //for slug
                    />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
}

export default News;
