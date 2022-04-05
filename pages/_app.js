import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [authorized, setAuthorized] = React.useState(false);
  const router = useRouter();
  const hideContent = () => setAuthorized(false);
  React.useEffect(() => {
    const authorizationPathCheck = (url) => {
      const publicPaths = [
        '/user/login',
        '/',
        '/wiadomosci',
        '/kontakt-do-pralma',
      ];
      const path = url.split('?')[0];
      const token =
        window !== 'undefined' && JSON.parse(localStorage.getItem('token'));
      if (!token && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/user/login',
          query: { returnFromUrl: router.asPath },
        });
      } else {
        setAuthorized(true);
      }
      console.log(router.asPath);
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
  return (
    <Layout>{getLayout(authorized && <Component {...pageProps} />)}</Layout>
  );
}

export default MyApp;
