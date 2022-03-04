import Head from 'next/head';

function HeadMetaTags({
  title,
  description,
  og_title,
  og_url,
  og_type,
  og_site_name,
  og_description,
  og_image,
  twitter_card,
  twitter_description,
  twitter_title,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:title" content={og_title} />
      <meta property="og:url" content={og_url} />
      <meta property="og:type" content={og_type} />
      <meta property="og:site_name" content={og_site_name} />
      <meta property="og:description" content={og_description} />
      <meta property="og:image" content={og_image} />
      <meta name="twitter:card" content={twitter_card} />
      <meta name="twitter:description" content={twitter_description} />
      <meta name="twitter:title" content={twitter_title} />
    </Head>
  );
}

HeadMetaTags.defaultProps = {
  title:
    'Pralma - wyposażenie pralni przemysłowej. Pralki, suszarki, pralnicowirówki',
  description:
    'Pralma - polski producent pralek, pralnicowirówek i suszarek bębnowych oraz wózków i regałów do pralni przemysłowych. Autoryzowany przedstawiciel najpopularniejszych na świecie urządzeń marki Primus',
  og_title: 'Polskie urządzenia pralnicze - Pralma',
  og_url: 'http://www.pralma.pl',
  og_type: 'website',
  og_site_name: 'PPUP Pralma sp. z o.o.',
  og_description:
    'Pralma - polski producent pralek, pralnicowirówek i suszarek bębnowych oraz wózków i regałów do pralni przemysłowych. Autoryzowany przedstawiciel najpopularniejszych na świecie urządzeń marki Primus',
  og_image: '',
  twitter_card: 'summary',
  twitter_description:
    'Pralma - polski producent pralek, pralnicowirówek i suszarek bębnowych oraz wózków i regałów do pralni przemysłowych. Ekonomiczne i ekologiczne wyposażenie pralni przemysłowej',
  twitter_title: 'Pralma - innowacyjne rozwiązania do pralni przemysłowej',
};

export default HeadMetaTags;
