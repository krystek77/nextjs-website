export const data = [
  {
    label: 'Urządzenia',
    path: '/urzadzenia-pralnia',
    submenu: [
      {
        label: 'Pralnicowirówki',
        path: '/pralnicowirowki',
        image: 'washer_extractors.png',
        list: ['sztywnomocowane', 'normalnoobrotowe', 'wysokoobrotowe'],
      },
      {
        label: 'Suszarki',
        path: '/suszarki-bebnowe',
        image: 'dryers.png',
        list: [
          'suszarki bębnowe',
          'suszarki z pompą ciepła',
          'suszarki komorowe',
        ],
      },
      {
        label: 'Prasownice',
        path: '/prasownice',
        image: 'ironers.png',
        list: [
          'nieckowe',
          'walcowe',
          'z wprowadzarką',
          'z wprowadzarka i skladarką',
          'z tylnym wywiezieniem',
          'wielowalcowe',
        ],
      },
      {
        label: 'Bariery higieny',
        path: '/bariery-higieny',
        image: 'barriers.png',
        list: [
          'wolnostojące przelotowe',
          'sztywnomocowane przelotowe',
          'bez wirowania, kątowe',
        ],
      },
      {
        label: 'Wirówki pralnicze',
        path: '/wirowki-pralnicze',
        image: 'washer_extractors.png',
        list: [
          'sterowanie automatyczne',
          'napęd z przemiennikiem częstotliwości',
        ],
      },
      {
        label: 'Pralnice',
        path: '/pralnice',
        image: 'washer_extractors.png',
        list: ['bębnowe o załadunku czołowym', 'bębnowe o załadunku bocznym'],
      },
      {
        label: 'Profesjonalne pralnico - suszarki',
        path: '/profesionalne-pralnico-suszarki',
        image: 'washer_dryer.png',
        list: [
          'kompaktowa budowa',
          'oszczędność miejsca',
          'ergonomiczna konstrukcja',
        ],
      },
      {
        label: 'Profesjonalne suszarko - suszarki',
        path: '/profesjonalne-suszarko-suszarki',
        image: 'dryer_dryer.png',
        list: [
          'kompaktowa budowa',
          'oszczędność miejsca',
          'ergonomiczna konstrukcja',
        ],
      },
      {
        label: 'Małe komercyjne pralnicowirówki',
        path: '/male-komercyjne-pralnicowirowki',
        image: 'small_washer_2.png',
        list: ['kompaktowa budowa', 'idelane dla złobków i przedszkoli'],
      },
      {
        label: 'Małe komercyjne suszarki',
        path: '/male-komercyjne-suszarki',
        image: 'small_dryers.png',
        list: ['kompaktowa budowa', 'idelane dla złobków i przedszkoli'],
      },
      {
        label: 'Wózki i regały',
        path: '/wozki-i-regaly',
        image: 'trolleys.png',
        list: [
          'na suche, brudne pranie',
          'na mokre pranie',
          'regały jezdne i stacjonarne',
          'kontenery jezdne',
          'stoły manipulacyjne',
        ],
      },
      {
        label: 'Prasowanie fasonowe',
        path: '/prasowanie-fasonowe',
        image: 'ironing.png',
        list: ['zestawy do prasowania', 'prasy'],
      },
    ],
  },
  {
    label: 'Urządzenia do samoobsługi',
    path: '/urzadzenia-pralnia-samoobslugowa',
    submenu: [
      { label: 'Pralnicowirówki', path: '/pralnicowirowki' },
      { label: 'Suszarki', path: '/suszarki-bebnowe' },
      { label: 'Prasownice', path: '/prasownice' },
      {
        label: 'Profesjonalne pralnico - suszarki',
        path: '/profesionalne-pralnico-suszarki',
      },
      {
        label: 'Profesjonalne suszarko - suszarki',
        path: '/profesjonalne-suszarko-suszarki',
      },
      {
        label: 'Małe komercyjne pralnicowirówki',
        path: '/male-komercyjne-pralnicowirowki',
      },
      { label: 'Małe komercyjne suszarki', path: '/male-komercyjne-suszarki' },
    ],
  },
  { label: 'Klienci', path: '/nasi-klienci', submenu: [] },
  { label: 'Wiadomości', path: '/wiadomosci', submenu: [] },
  { label: 'Kontakt', path: '/kontakt-do-pralma', submenu: [] },
];
