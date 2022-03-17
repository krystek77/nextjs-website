import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import NewsItem from '../../components/NewsItem/NewsItem';

import styles from './LastNews.module.css';

const newsData = [
  {
    id: 1,
    image: 'news_01',
    date: '20.12.2021',
    title: 'Ponad 3500 mopów dziennie z urządzeniami Primus',
    info: 'As a long-term partner, Primus assessed Katzer GmbH in the product selection and the implementation of this project. The installation of the devices was then taken over by our Primus distributor, Penderok',
    content: '',
  },
  {
    id: 2,
    image: 'news_02',
    date: '25.01.2022',
    title: 'Większe możliwości i lepsze warunki pracy',
    info: 'Our PRIMUS experts worked with lESAT du Rangen for the new reorganization of their laundry that had become obsolete. This project is a nice example of a modern, ergonomic laundry redesigned taking the expectations of the management and the handicapped workers into accoun',
    content: '',
  },
  {
    id: 3,
    image: 'news_03',
    date: '20.01.2022',
    title: 'Bardziej ergonomiczne, wydajne i oszczędne',
    info: 'PRIMUS efficient and less energy-consuming laundry renovation was made in the ESAT de la Bièvre a center based in France that promotes the social and professional autonomy, integration, and reintegration of people with disabilities',
    content: '',
  },
];

function LastNews() {
  return (
    <section className={styles.news}>
      <header className={styles.news__header}>
        <Subtitle content="Aktualności ze świata Pralmy" />
        <Title content="Ostatenie wiadomości" />
      </header>
      {newsData.length ? (
        <div className={styles.news__container}>
          {newsData.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default LastNews;
