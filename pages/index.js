import React from 'react';
import LinkButton from '../components/LinkButton/LinkButton';
import Subtitle from '../components/Subtitle/Subtitle';
import Title from '../components/Title/Title';
import Description from '../components/Description/Description';
import Image from 'next/image';

export default function Home() {
  return (
    <React.Fragment>
      <Image
        src="/assets/images/template.png"
        alt="some"
        width="240"
        height="320"
      />
      <Subtitle content="Przekrocz granice innowacji" />
      <Title
        variant="h1"
        content="Sposób na ekologiczną i ekonomiczną pralnię wodną"
      />
      <Description />

      <Subtitle content="Do każdego rodzaju i wielkości pralni przemysłowej" />
      <Title content="Wyposażenie nowoczesnej pralni" />
      <Description
        classes="description_18"
        content="The soapbox offers four compartments, suitable for powder or liquid soap. For additional
ease-of-use, the compartments are now located at the front of the lid and next to each
other. To make things easier for the owner, all compartments have been designed to allow
easy access during service. The compartments can be covered (covers are optional) to
prevent customers from making mistakes."
      />

      <Subtitle content="Informacje ze świata Pralmy" />
      <Title variant="h3" content="Wiadomości" />
      <Description />

      <LinkButton label="Odkryj więcej" to="/" />
      <LinkButton label="Przeczytaj" to="/" />
      <LinkButton label="Zapisz się" to="/" />
      <LinkButton
        label="Poznaj szczegóły"
        to="/"
        classes="linkButton_disabled"
      />
      <Image
        src="/assets/images/template.png"
        alt="some"
        width="480"
        height="640"
      />
    </React.Fragment>
  );
}
