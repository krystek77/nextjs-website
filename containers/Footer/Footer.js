import Link from 'next/link';
import Image from 'next/image';
import Title from '../../components/Title/Title';
import styles from './Footer.module.css';
import Copyright from '../../components/Copyright/Copyright';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__item}>
          <Title variant="h4" content="Firma" />
          {/** list items */}
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link href="/o-pralma">
                <a className={styles.list__link}>O nas</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/historia-pralma">
                <a className={styles.list__link}>Nasza historia</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/wiadomosci">
                <a className={styles.list__link}>Wiadomości</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/nasi-klienci">
                <a className={styles.list__link}>Nasi Klienci</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/informacje-prawne">
                <a className={styles.list__link}>Informacje prawne</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/kontakt-do-pralma">
                <a className={styles.list__link}>Kontakt</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <Link href="/urzadzenia-pralnia">
            <a>
              <Title variant="h4" content="Urządzenia" />
            </a>
          </Link>
          {/** list items */}
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/pralnicowirowki">
                <a className={styles.list__link}>Pralnicowirówki</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/suszarki">
                <a className={styles.list__link}>Suszarki</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/prasownice">
                <a className={styles.list__link}>Prasownice</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/bariery-higieny">
                <a className={styles.list__link}>Bariery higieny</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/wirowki-pralnicze">
                <a className={styles.list__link}>Wirówki pralnicze</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/pralnice">
                <a className={styles.list__link}>Pralnice</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/profesionalne-pralnico-suszarki">
                <a className={styles.list__link}>
                  Profesjonalne pralnico - suszarki
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/profesjonalne-suszarko-suszarki">
                <a className={styles.list__link}>
                  Profesjonalne suszarko - suszarki
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/male-komercyjne-pralnicowirowki">
                <a className={styles.list__link}>
                  Małe komercyjne pralnicowirówki
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/male-komercyjne-suszarki">
                <a className={styles.list__link}>Małe komercyjne suszarki</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/wozki-i-regaly">
                <a className={styles.list__link}>Wózki i regały</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia/prasowanie-fasonowe">
                <a className={styles.list__link}>Prasowanie fasonowe</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <Link href="/urzadzenia-pralnia-samoobslugowa">
            <a>
              <Title variant="h4" content="Samoobsługowe" />
            </a>
          </Link>
          {/** list items */}
          <ul className={styles.list} style={{ marginBottom: '24px' }}>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia-samoobslugowa/pralnicowirowki">
                <a className={styles.list__link}>Pralnicowirówki</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia-samoobslugowa/suszarki">
                <a className={styles.list__link}>Suszarki</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia-samoobslugowa/prasownice">
                <a className={styles.list__link}>Prasownice</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia-samoobslugowa/profesionalne-pralnico-suszarki">
                <a className={styles.list__link}>
                  Profesjonalne pralnico - suszarki
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia-samoobslugowa/profesjonalne-suszarko-suszarki">
                <a className={styles.list__link}>
                  Profesjonalne suszarki - suszarki
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia-samoobslugowa/male-komercyjne-pralnicowirowki">
                <a className={styles.list__link}>
                  Małe komercyjne pralnicowirówki
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnia-samoobslugowa/male-komercyjne-suszarki">
                <a className={styles.list__link}>Małe komercyjne suszarki</a>
              </Link>
            </li>
          </ul>
          <Link href="/technologie-pralnicze">
            <a>
              <Title variant="h4" content="Technologie" />
            </a>
          </Link>
          {/** list items */}
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link href="/pompa-ciepla-evo4">
                <a className={styles.list__link}>EVO4</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/xcontrol-flex">
                <a className={styles.list__link}>
                  XControl Flex / XControl Flex Plus
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/sterowniki-do-pralek-przemyslowych">
                <a className={styles.list__link}>Sterowniki</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <Title variant="h4" content="Rozwiązania dedykowane" />
          {/** list items */}
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link href="/do-prania-mop">
                <a className={styles.list__link}>Firmy sprzątające - MOP</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnicze-dla-strazy-pozarnej">
                <a className={styles.list__link}>
                  Służby cywilne - straż pożarna
                </a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/urzadzenia-pralnicze-dla-marynarki-wojennej">
                <a className={styles.list__link}>Marynarka wojenna</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/bariera-higieny">
                <a className={styles.list__link}>Bariera higieny</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/pralnia-samoobslugowa">
                <a className={styles.list__link}>Pralnie samoobsługowe</a>
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/softwash">
                <a className={styles.list__link}>Softwash - delikatne pranie</a>
              </Link>
            </li>
          </ul>
          <div className={styles.socialMedia}>
            <a
              className={styles.socialMedia__icon}
              href="http://wwww.pralma.pl"
            >
              <Image
                src="/assets/icons/facebook.svg"
                alt="facebook"
                width="32"
                height="32"
              />
            </a>
            <a
              className={styles.socialMedia__icon}
              href="http://wwww.pralma.pl"
            >
              <Image
                src="/assets/icons/youtube.svg"
                alt="youtube"
                width="32"
                height="32"
              />
            </a>
            <a
              className={styles.socialMedia__icon}
              href="http://wwww.pralma.pl"
            >
              <Image
                src="/assets/icons/instagram.svg"
                alt="instagram"
                width="32"
                height="32"
              />
            </a>
            <a
              className={styles.socialMedia__icon}
              href="http://wwww.pralma.pl"
            >
              <Image
                src="/assets/icons/allegro.svg"
                alt="allegro"
                width="64"
                height="22"
              />
            </a>
            <a
              className={styles.socialMedia__icon}
              href="http://wwww.pralma.pl"
            >
              <Image
                src="/assets/icons/twitter.svg"
                alt="twitter"
                width="32"
                height="32"
              />
            </a>
            <a
              className={styles.socialMedia__icon}
              href="http://wwww.pralma.pl"
            >
              <Image
                src="/assets/icons/linkedin.svg"
                alt="linkedin"
                width="32"
                height="32"
              />
            </a>
            <a
              className={styles.socialMedia__icon}
              href="http://wwww.pralma.pl"
            >
              <Image
                src="/assets/icons/pinterest.svg"
                alt="pinterest"
                width="32"
                height="32"
              />
            </a>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
export default Footer;
