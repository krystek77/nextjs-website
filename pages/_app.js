import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [authorized, setAuthorized] = React.useState(false);
  const router = useRouter();
  const canonicalUrl = (
    `https://pralma.com.pl` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];
  const hideContent = () => setAuthorized(false);
  React.useEffect(() => {
    const authorizationPathCheck = (url) => {
      const publicPaths = [
        '/user/login',
        '/wiadomosci',
        '/urzadzenia-pralnia',
        '/urzadzenia-pralnia-samoobslugowa',
        '/technologie-pralnicze',
        '/kontakt-do-pralma',
        '/bariera-higieny',
        '/do-prania-mop',
        '/ekologiczne-wyposazenie-pralni-przemyslowej',
        '/historia-pralma',
        '/informacje-prawne',
        '/nasi-klienci',
        '/o-pralma',
        '/pompa-ciepla-evo4',
        '/pralnia-samoobslugowa',
        '/softwash',
        '/sterowniki-do-pralek-przemyslowych',
        '/czesci-zamienne-pralki-przemyslowe',
        '/urzadzenia-pralnicze-dla-marynarki-wojennej',
        '/urzadzenia-pralnicze-dla-strazy-pozarnej',
        '/xcontrol-flex',
      ];
      const path = url.split('?')[0];
      const token =
        window !== 'undefined' && JSON.parse(localStorage.getItem('token'));
      if (
        !token &&
        !publicPaths.find((publicRoute) =>
          path === '/' ? true : path.includes(publicRoute)
        )
      ) {
        setAuthorized(false);
        router.push({
          pathname: '/user/login',
          query: { returnFromUrl: router.asPath },
        });
      } else {
        setAuthorized(true);
      }
    };
    authorizationPathCheck(router.asPath);
    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', authorizationPathCheck);
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authorizationPathCheck);
    };
  }, [router]);

  const getLayout = Component.getLayout || ((page) => page);
  // console.log(canonicalUrl);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2E93RL2XN5"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2E93RL2XN5');
      `}
      </Script>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout>{getLayout(authorized && <Component {...pageProps} />)}</Layout>
    </>
  );
}

export default MyApp;
